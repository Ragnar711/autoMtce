import mongoose from "mongoose";
import dotenv from "dotenv";
import {
    OperationModel,
    ElementModel,
    EnsembleModel,
    SystemModel,
    ParamsModel,
    ChecklistModel,
} from "./checklist.model";

async function seedDatabase() {
    try {
        dotenv.config();

        mongoose.set("strictQuery", true);

        mongoose.connect(process.env.MONGO_URI ?? "");

        const operation1_1_1_1 = await OperationModel.create({
            name: "Inspection sonore de l'accouplement (présence de bruit anormal et vibration)",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_1 = await ElementModel.create({
            name: "Moteur (*2)",
            operations: [operation1_1_1_1._id],
        });

        const operation1_1_2_1 = await OperationModel.create({
            name: "Inspection de l'état d'usure des roulements en vérifiant la présence d'un échauffement local au niveau du cache palier",
            frequency: "H",
            level: 2,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_1_2_2 = await OperationModel.create({
            name: "Inspection de l'état de surface des rouleaux de guidage",
            frequency: "H",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_2 = await ElementModel.create({
            name: "Rouleau de guidage (*2)",
            operations: [operation1_1_2_1._id, operation1_1_2_2._id],
        });

        const operation1_1_3_1 = await OperationModel.create({
            name: "Vérification de la présence de fuite au niveau de Beam stop",
            frequency: "H",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_3 = await ElementModel.create({
            name: "Beam Stop",
            operations: [operation1_1_3_1._id],
        });

        const operation1_1_4_1 = await OperationModel.create({
            name: "Inspection de l'état de dégradation de la fenêtre secondaire et nettoyage avec chiffon et amochina",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_4 = await ElementModel.create({
            name: "Fenêtre secondaire",
            operations: [operation1_1_4_1._id],
        });

        const operation1_1_5_1 = await OperationModel.create({
            name: "Nettoyage des rails",
            frequency: "H",
            level: 2,
            type: "nettoyage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_5 = await ElementModel.create({
            name: "Roues de déplacement porte(*2)",
            operations: [operation1_1_5_1._id],
        });

        const operation1_1_6_1 = await OperationModel.create({
            name: "Nettoyage des buses",
            frequency: "H",
            level: 2,
            type: "nettoyage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_6 = await ElementModel.create({
            name: "Système d'arrosage",
            operations: [operation1_1_6_1._id],
        });

        const operation1_1_7_1 = await OperationModel.create({
            name: "Inspection de l'état des flexibles de refroidissement, des roulements et des cylindres",
            frequency: "H",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_1_7_2 = await OperationModel.create({
            name: "Vérification de présence de jeu au niveau de la pignon",
            frequency: "H",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_1_7_3 = await OperationModel.create({
            name: "Inspection de l'état d'usure des roulements en vérifiant la présence d'un échauffement local au niveau du cache palier",
            frequency: "H",
            level: 2,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_7 = await ElementModel.create({
            name: "Cylindre (*2)",
            operations: [
                operation1_1_7_1._id,
                operation1_1_7_2._id,
                operation1_1_7_3._id,
            ],
        });

        const operation1_1_8_1 = await OperationModel.create({
            name: "Inspection de l'état d'endommagement des anneaux de levage et de maintien en manutention du couvercle",
            frequency: "E",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_8 = await ElementModel.create({
            name: "Couvercle",
            operations: [operation1_1_8_1._id],
        });

        const operation1_1_9_1 = await OperationModel.create({
            name: "Serrage des vis de fixation du couvercle en plomb",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_1_9 = await ElementModel.create({
            name: "Couvercle en plomb",
            operations: [operation1_1_9_1._id],
        });

        const ensemble1_1 = await EnsembleModel.create({
            name: "Convoyeur",
            elements: [
                element1_1_1._id,
                element1_1_2._id,
                element1_1_3._id,
                element1_1_4._id,
                element1_1_5._id,
                element1_1_6._id,
                element1_1_7._id,
                element1_1_8._id,
                element1_1_9._id,
            ],
        });

        const operation1_2_1_1 = await OperationModel.create({
            name: "Nettoyage de la fenêtre",
            frequency: "J",
            level: 2,
            type: "nettoyage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_2_1_2 = await OperationModel.create({
            name: "Inspection de l'état de dégradation de la fenêtre primaire et secondaire et nettoyage avec compresse et alcool",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_2_1_3 = await OperationModel.create({
            name: "Inspection de l'état de la fixation de la fenêtre secondaire",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_1 = await ElementModel.create({
            name: "Fenêtre en titane",
            operations: [
                operation1_2_1_1._id,
                operation1_2_1_2._id,
                operation1_2_1_3._id,
            ],
        });

        const operation1_2_2_1 = await OperationModel.create({
            name: "Vérification des fuites d'air au niveau de l’armoire de commande shutter",
            frequency: "E",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_2 = await ElementModel.create({
            name: "Armoire de commande shutter",
            operations: [operation1_2_2_1._id],
        });

        const operation1_2_3_1 = await OperationModel.create({
            name: "Vérification des fuites d'air au niveau du flexible d'air du shutter",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_3 = await ElementModel.create({
            name: "flexible d'air du shutter",
            operations: [operation1_2_3_1._id],
        });

        const operation1_2_4_1 = await OperationModel.create({
            name: "Vérification la translation libre du shutter",
            frequency: "J",
            level: 1,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_4 = await ElementModel.create({
            name: "Shutter",
            operations: [operation1_2_4_1._id],
        });

        const operation1_2_5_1 = await OperationModel.create({
            name: "Vérification de la présence du bruit au niveau de courroie",
            frequency: "J",
            level: 2,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const operation1_2_5_2 = await OperationModel.create({
            name: "Inspection de la présence du bruit au niveau de la turbine",
            frequency: "H",
            level: 2,
            type: "inspection",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_5 = await ElementModel.create({
            name: "Système de refroidissement fenêtre (turbo compresseur)",
            operations: [operation1_2_5_1._id, operation1_2_5_2._id],
        });

        const operation1_2_6_1 = await OperationModel.create({
            name: "Vérifier les valeurs de la pompe ionique : le vide ≥ 7.10-7 TORR le courant I ≥ 1.10-2A ; Vfix =7000V",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_6 = await ElementModel.create({
            name: "Pompe ionique",
            operations: [operation1_2_6_1._id],
        });

        const operation1_2_7_1 = await OperationModel.create({
            name: "Vérifier la Valeur de pression gaz SF6 au niveau Manomètre (entre 5,8 et 6 bar)",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_2_7 = await ElementModel.create({
            name: "Manomètre",
            operations: [operation1_2_7_1._id],
        });

        const ensemble1_2 = await EnsembleModel.create({
            name: "Chambre d'irradiation",
            elements: [
                element1_2_1._id,
                element1_2_2._id,
                element1_2_3._id,
                element1_2_4._id,
                element1_2_5._id,
                element1_2_6._id,
                element1_2_7._id,
            ],
        });

        const operation1_3_1_1 = await OperationModel.create({
            name: "Vérifier la valeur de température au niveau du chiller (entre ?? et ??) et s'il y a un e fuite d'eau",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_3_1 = await ElementModel.create({
            name: "Chiller",
            operations: [operation1_3_1_1._id],
        });

        const operation1_3_2_1 = await OperationModel.create({
            name: "Vérifier la position idéale de la vanne selon le standard visuel (poka yoké) et faire la correction",
            frequency: "J",
            level: 2,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_3_2 = await ElementModel.create({
            name: "Vanne",
            operations: [operation1_3_2_1._id],
        });

        const ensemble1_3 = await EnsembleModel.create({
            name: "Système de refroidissement",
            elements: [element1_3_1._id, element1_3_2._id],
        });

        const operation1_4_1_1 = await OperationModel.create({
            name: "Nettoyage des filtres à air de la turbo-compresseur avec de l'air comprimé",
            frequency: "J",
            level: 1,
            type: "nettoyage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_4_1 = await ElementModel.create({
            name: "Filtres à air",
            operations: [operation1_4_1_1._id],
        });

        const ensemble1_4 = await EnsembleModel.create({
            name: "Turbo-compresseur",
            elements: [element1_4_1._id],
        });

        const operation1_5_1_1 = await OperationModel.create({
            name: "Vider le bac d'eau du déshumidificateur au niveau de l’armoire électrique (à revoir)",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_5_1 = await ElementModel.create({
            name: "Déshumidificateur",
            operations: [operation1_5_1_1._id],
        });

        const ensemble1_5 = await EnsembleModel.create({
            name: "Armoire électrique",
            elements: [element1_5_1._id],
        });

        const operation1_6_1_1 = await OperationModel.create({
            name: "Vérifier les valeurs de scan : XS=237±5 XC=123±5 YS=247±5 YC =126±5",
            frequency: "E",
            level: 1,
            type: "réglage",
            status: false,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1_6_1 = await ElementModel.create({
            name: "",
            operations: [operation1_6_1_1._id],
        });

        const ensemble1_6 = await EnsembleModel.create({
            name: "",
            elements: [element1_6_1._id],
        });

        const system1 = await SystemModel.create({
            name: "Irradiation",
            ensembles: [
                ensemble1_1._id,
                ensemble1_2._id,
                ensemble1_3._id,
                ensemble1_4._id,
                ensemble1_5._id,
                ensemble1_6._id,
            ],
        });

        const params1 = await ParamsModel.create({
            name: "Params 1",
            min: 1,
            max: 10,
        });

        await ChecklistModel.create({
            systems: [system1._id],
            params: [params1._id],
        });

        console.log("Sample data seeded successfully.");
    } catch (error) {
        console.error("Error seeding sample data:", error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
