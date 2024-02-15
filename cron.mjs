/* eslint-disable indent */
import cron from "node-cron";
import { MongoClient } from "mongodb";
import moment from "moment";

// Replace with your connection details
const uri = "mongodb://root:example@localhost:27017/autoMtce?authSource=admin";
const databaseName = "autoMtce";

// Replace with collection names
const checklistCollection = "checklists";
const operationCollection = "operations";
const archiveCollection = "archive";

const connectToDatabase = async () => {
    const client = await MongoClient.connect(uri);
    return client.db(databaseName);
};

const getLastDocumentFromChecklist = async () => {
    const db = await connectToDatabase();
    return db
        .collection(checklistCollection)
        .aggregate([
            { $match: {} },
            { $sort: { _id: -1 } },
            { $limit: 1 },
            {
                $project: {
                    _id: 0,
                    createdAt: new Date(),
                    systems: 1,
                    params: 1,
                },
            },
        ])
        .next();
};

const populateSystems = async (systems) => {
    const db = await connectToDatabase();
    return Promise.all(
        systems.map(async (systemId) => {
            const system = await db
                .collection("systems")
                .findOne({ _id: systemId });
            system.ensembles = await Promise.all(
                system.ensembles.map(async (ensembleId) => {
                    const ensemble = await db
                        .collection("ensembles")
                        .findOne({ _id: ensembleId });
                    ensemble.elements = await Promise.all(
                        ensemble.elements.map(async (elementId) => {
                            const element = await db
                                .collection("elements")
                                .findOne({ _id: elementId });
                            element.operations = await Promise.all(
                                element.operations.map(async (operationId) => {
                                    const operation = await db
                                        .collection("operations")
                                        .findOne({ _id: operationId });
                                    return operation;
                                }),
                            );
                            return element;
                        }),
                    );
                    return ensemble;
                }),
            );
            return system;
        }),
    );
};

const populateParams = async () => {
    const db = await connectToDatabase();
    return db.collection("params").find().toArray();
};

const updateDueDatesIfNeeded = async () => {
    const db = await connectToDatabase();
    const currentDate = new Date();
    let updated = false;

    while (!updated) {
        const operationDocs = await db
            .collection(operationCollection)
            .find()
            .toArray();

        for (const doc of operationDocs) {
            const dueDate = doc.dueDate;
            const frequency = doc.frequency;
            let newDueDate;

            if (dueDate < currentDate) {
                switch (frequency) {
                    case "E":
                        newDueDate = moment(dueDate).add(8, "h");
                        break;
                    case "J":
                        newDueDate = moment(dueDate).add(1, "d");
                        break;
                    case "H":
                        newDueDate = moment(dueDate).add(1, "w");
                        break;
                    case "2S":
                        newDueDate = moment(dueDate).add(2, "w");
                        break;
                    default:
                        console.error("Unhandled frequency:", frequency);
                        break;
                }
            }

            if (newDueDate && newDueDate > currentDate) {
                await db
                    .collection(operationCollection)
                    .updateOne(
                        { _id: doc._id },
                        { $set: { dueDate: newDueDate._d } },
                    );
                updated = true;
            }
        }
    }
};

const archiveLastDocument = async (lastDocument) => {
    const db = await connectToDatabase();
    await db.collection(archiveCollection).insertOne(lastDocument);
};

const runScript = async () => {
    try {
        const lastDocument = await getLastDocumentFromChecklist();
        if (!lastDocument) {
            console.error("No document found in the checklist.");
            return;
        }

        lastDocument.systems = await populateSystems(lastDocument.systems);
        lastDocument.params = await populateParams();
        await archiveLastDocument(lastDocument);
        await updateDueDatesIfNeeded();

        const client = await MongoClient.connect(uri);
        await client.close();
    } catch (error) {
        console.error("Error running cron job:", error);
    }
};

cron.schedule("0 6 * * *", runScript);
cron.schedule("0 14 * * *", runScript);
cron.schedule("0 22 * * *", runScript);

console.log("Cron jobs started successfully!");
