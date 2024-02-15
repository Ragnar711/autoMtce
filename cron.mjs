import cron from "node-cron";
import { MongoClient } from "mongodb";

// Replace with your connection details
const uri = "mongodb://root:example@localhost:27017/autoMtce?authSource=admin";
const databaseName = "autoMtce";

// Replace with collection names
const checklistCollection = "checklists";
const operationCollection = "operations";
const archiveCollection = "archive";

const runScript = async () => {
    try {
        // Connect to MongoDB
        const client = await MongoClient.connect(uri);
        const db = client.db(databaseName);

        // Get the last document from checklist
        const lastDocumentCursor = await db
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
            ]);

        const lastDocument = await lastDocumentCursor.next();

        // Populate systems
        lastDocument.systems = await Promise.all(
            lastDocument.systems.map(async (systemId) => {
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
                                    element.operations.map(
                                        async (operationId) => {
                                            const operation = await db
                                                .collection("operations")
                                                .findOne({ _id: operationId });
                                            return operation;
                                        },
                                    ),
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

        // Populate params
        lastDocument.params = await db.collection("params").find().toArray();

        // Archive the document
        await db.collection(archiveCollection).insertOne(lastDocument);

        // Update dueDate if needed
        const currentDate = new Date();
        const operationDocs = await db
            .collection(operationCollection)
            .find()
            .toArray();
        for (const doc of operationDocs) {
            const dueDate = doc.dueDate;
            if (dueDate && dueDate < currentDate) {
                await db
                    .collection(operationCollection)
                    .updateOne(
                        { _id: doc._id },
                        { $set: { dueDate: currentDate } },
                    );
            }
        }

        // Close connection
        await client.close();
    } catch (error) {
        console.error("Error running cron job:", error);
    }
};

cron.schedule("0 6 * * *", runScript);
cron.schedule("0 14 * * *", runScript);
cron.schedule("0 22 * * *", runScript);

console.log("Cron jobs started successfully!");
