import * as dotenv from "dotenv";

import mongoose from "mongoose";

import { ChecklistModel } from "./src/Models/checklist.model";
import { UpdatedChecklistModel } from "./src/Models/updated-checklist.model";

dotenv.config();

mongoose.set("strictQuery", true);

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI!);

const seedData = [
    {
        systems: [
            {
                name: "IR",
                ensembles: [
                    {
                        name: "Convoyeur",
                        elements: [
                            {
                                name: "Moteur (*4)",
                                operations: [
                                    {
                                        name: "Contrôle sonore de présence d'un bruit anormal au niveau des moteurs",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection sonore de l'accouplement (présence de bruit anormal et vibration)",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleau de guidage (*4)",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des rouleaux de guidage",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Graissage des roulements",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification du désalignement des axes",
                                        frequency: "J",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état d'usure des roulements",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Beam Stop",
                                operations: [
                                    {
                                        name: "Vérification de la présence de fuite au niveau de Beam stop",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Galet entrée - sortie (*2)",
                                operations: [
                                    {
                                        name: "Contrôle de la bonne rotation des roulements des galets",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état de surface des galets",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Roues de déplacement porte",
                                operations: [
                                    {
                                        name: "Inspection des déformations au niveau de la rail",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Nettoyage des rails en utilisant (brosse et air comprimée)",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Système d'arrosage",
                                operations: [
                                    {
                                        name: "Nettoyage des buses par air comprimée",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Cylindre (*4)",
                                operations: [
                                    {
                                        name: "Graissage des roulements",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier l'état d'usure des pinces",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état d'usure des roulements",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier l'état d'usure des pinces",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Accélérateur d'électrons",
                        elements: [
                            {
                                name: "Système de refroidissement fenêtre (Window blower)",
                                operations: [
                                    {
                                        name: "Nettoyage des filtres à air avec de l'air comprimé",
                                        frequency: "J",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de présence de bruit au niveau de courroie",
                                        frequency: "J",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Fenêtre en titane",
                                operations: [
                                    {
                                        name: "Nettoyage de la fenêtre avec hexomedine +alcool +compress",
                                        frequency: "J",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Système de refroidissement",
                        elements: [
                            {
                                name: "Débitmètres",
                                operations: [
                                    {
                                        name: "Vérifier la valeur de consigne et l'état de voyant",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier la présence de fuite au niveau de raccordement du débit mètre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Echangeur",
                                operations: [
                                    {
                                        name: "Vérifier la présence de fuite",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Pressostat",
                                operations: [
                                    {
                                        name: "Vérifier la variation brusque et rapide de la pression au niveau de manomètre à la sortie de la pompe",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Vanne",
                                operations: [
                                    {
                                        name: "Vérifier la position idéale de la vanne selon le standard visuel (poka yoké) et faire la correction",
                                        frequency: "J",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: true,
            },
            {
                name: "NPS",
                ensembles: [
                    {
                        name: "Porte intermédiaire",
                        elements: [
                            {
                                name: "Brosse de freinage",
                                operations: [
                                    {
                                        name: "Inspection de l'état des fibres au niveau de la brosse",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Vérin",
                                operations: [
                                    {
                                        name: "Inspection des fuites au niveau du vérin",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleaux de guidage",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des rouleaux",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Lame",
                                operations: [
                                    {
                                        name: "Vérification de l'état d'usure de la lame de coupe",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Bobinoir 1 & 2",
                        elements: [
                            {
                                name: "Pointe bobine",
                                operations: [
                                    {
                                        name: "Vérification du niveau d'huile au niveau de la jauge réservoir d'huile du maitre-cylindre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de présence de fuite au niveau du maitre-cylindre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection des fuites d'air au niveau des flexible (inspection sonore)",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Gabestan / Pantin",
                        elements: [
                            {
                                name: "Poulie cabestan",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulie cabestan",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Pantin",
                                operations: [
                                    {
                                        name: "Vérification de l'état de surface des poulies pantin et vérification de la liberté de rotation",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de renvoi",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulies de renvoi",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Système de trancannage",
                        elements: [
                            {
                                name: "3 poulies de guidage",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulie cabestan",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine de déchargement",
                        elements: [
                            {
                                name: "Chaine à maillons",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur de position",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine de chargement",
                        elements: [
                            {
                                name: "Chaine à maillons",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur de position",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "2 capteur photocellule",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur photocellules",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine intermédiaire",
                        elements: [
                            {
                                name: "4 capteurs photocellule",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur photocellules",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
            {
                name: "DEP",
                ensembles: [
                    {
                        name: "Pantin",
                        elements: [
                            {
                                name: "Vérin linéaire",
                                operations: [
                                    {
                                        name: "Inspection des fuites au niveau des flexibles d'air comprimé 8 mm",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie (x10)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Platform",
                        elements: [
                            {
                                name: "Système Vis Ecrou",
                                operations: [
                                    {
                                        name: "Nettoyage de l'axe et des galets et rail de guidage avec de la LOCTITE et Graissage de l'écrou (graisse SKF)",
                                        frequency: "2S",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Pointe",
                        elements: [
                            {
                                name: "Pointe mobile",
                                operations: [
                                    {
                                        name: "Nettoyage du rail de guidage avec de la LOCTITE",
                                        frequency: "2S",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Cabine",
                        elements: [
                            {
                                name: "Poulie de guidage (*2)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
            {
                name: "APC",
                ensembles: [
                    {
                        name: "Contrôleur de diamètre LAZER",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Nettoyage complet (essentiellement les lentilles avec des lingettes\") et vérification du joint d'étanchéité et serrage du couvercle",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur de diamètre",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Contrôleur Nœud",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Nettoyage complet (essentiellement les lentilles avec des lingettes\") et vérification du joint d'étanchéité et serrage du couvercle",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur de diamètre",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Contrôleur Spark (Spark test)",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur du SPARK",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Nettoyage avec de l'air comprimé et chiffon",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Lampe",
                                operations: [
                                    {
                                        name: "Vérification de fonctionnement de la lampe",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Goulotte",
                        elements: [
                            {
                                name: "Souffleur",
                                operations: [
                                    {
                                        name: "Nettoyage du souffleur en utilisant une brosse métallique (Fischer)",
                                        frequency: "H",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Serrage de l'écrou",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de guidage en S (*3)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de guidage (*3)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleaux de guidage",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
        ],
        params: [
            {
                name: "débit",
                min: 150,
                max: 250,
                deleted: false,
            },
            {
                name: "vitesse",
                min: 1000,
                max: 1500,
                deleted: false,
            },
        ],
    },
];

const seedData2 = [
    {
        systems: [
            {
                name: "IR",
                ensembles: [
                    {
                        name: "Convoyeur",
                        elements: [
                            {
                                name: "Moteur (*4)",
                                operations: [
                                    {
                                        name: "Contrôle sonore de présence d'un bruit anormal au niveau des moteurs",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection sonore de l'accouplement (présence de bruit anormal et vibration)",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleau de guidage (*4)",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des rouleaux de guidage",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Graissage des roulements",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification du désalignement des axes",
                                        frequency: "J",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état d'usure des roulements",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Beam Stop",
                                operations: [
                                    {
                                        name: "Vérification de la présence de fuite au niveau de Beam stop",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Galet entrée - sortie (*2)",
                                operations: [
                                    {
                                        name: "Contrôle de la bonne rotation des roulements des galets",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état de surface des galets",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Roues de déplacement porte",
                                operations: [
                                    {
                                        name: "Inspection des déformations au niveau de la rail",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Nettoyage des rails en utilisant (brosse et air comprimée)",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Système d'arrosage",
                                operations: [
                                    {
                                        name: "Nettoyage des buses par air comprimée",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Cylindre (*4)",
                                operations: [
                                    {
                                        name: "Graissage des roulements",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier l'état d'usure des pinces",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de l'état d'usure des roulements",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier l'état d'usure des pinces",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Accélérateur d'électrons",
                        elements: [
                            {
                                name: "Système de refroidissement fenêtre (Window blower)",
                                operations: [
                                    {
                                        name: "Nettoyage des filtres à air avec de l'air comprimé",
                                        frequency: "J",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de présence de bruit au niveau de courroie",
                                        frequency: "J",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Fenêtre en titane",
                                operations: [
                                    {
                                        name: "Nettoyage de la fenêtre avec hexomedine +alcool +compress",
                                        frequency: "J",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Système de refroidissement",
                        elements: [
                            {
                                name: "Débitmètres",
                                operations: [
                                    {
                                        name: "Vérifier la valeur de consigne et l'état de voyant",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérifier la présence de fuite au niveau de raccordement du débit mètre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Echangeur",
                                operations: [
                                    {
                                        name: "Vérifier la présence de fuite",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Pressostat",
                                operations: [
                                    {
                                        name: "Vérifier la variation brusque et rapide de la pression au niveau de manomètre à la sortie de la pompe",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Vanne",
                                operations: [
                                    {
                                        name: "Vérifier la position idéale de la vanne selon le standard visuel (poka yoké) et faire la correction",
                                        frequency: "J",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
            {
                name: "NPS",
                ensembles: [
                    {
                        name: "Porte intermédiaire",
                        elements: [
                            {
                                name: "Brosse de freinage",
                                operations: [
                                    {
                                        name: "Inspection de l'état des fibres au niveau de la brosse",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Vérin",
                                operations: [
                                    {
                                        name: "Inspection des fuites au niveau du vérin",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleaux de guidage",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des rouleaux",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Lame",
                                operations: [
                                    {
                                        name: "Vérification de l'état d'usure de la lame de coupe",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Bobinoir 1 & 2",
                        elements: [
                            {
                                name: "Pointe bobine",
                                operations: [
                                    {
                                        name: "Vérification du niveau d'huile au niveau de la jauge réservoir d'huile du maitre-cylindre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection de présence de fuite au niveau du maitre-cylindre",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Inspection des fuites d'air au niveau des flexible (inspection sonore)",
                                        frequency: "J",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Gabestan / Pantin",
                        elements: [
                            {
                                name: "Poulie cabestan",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulie cabestan",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Pantin",
                                operations: [
                                    {
                                        name: "Vérification de l'état de surface des poulies pantin et vérification de la liberté de rotation",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de renvoi",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulies de renvoi",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Système de trancannage",
                        elements: [
                            {
                                name: "3 poulies de guidage",
                                operations: [
                                    {
                                        name: "Inspection de l'état de surface des poulie cabestan",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine de déchargement",
                        elements: [
                            {
                                name: "Chaine à maillons",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur de position",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine de chargement",
                        elements: [
                            {
                                name: "Chaine à maillons",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur de position",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "2 capteur photocellule",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur photocellules",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Chaine intermédiaire",
                        elements: [
                            {
                                name: "4 capteurs photocellule",
                                operations: [
                                    {
                                        name: "Vérifier la fixation et réglage du capteur photocellules",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
            {
                name: "DEP",
                ensembles: [
                    {
                        name: "Pantin",
                        elements: [
                            {
                                name: "Vérin linéaire",
                                operations: [
                                    {
                                        name: "Inspection des fuites au niveau des flexibles d'air comprimé 8 mm",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie (x10)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Platform",
                        elements: [
                            {
                                name: "Système Vis Ecrou",
                                operations: [
                                    {
                                        name: "Nettoyage de l'axe et des galets et rail de guidage avec de la LOCTITE et Graissage de l'écrou (graisse SKF)",
                                        frequency: "2S",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Pointe",
                        elements: [
                            {
                                name: "Pointe mobile",
                                operations: [
                                    {
                                        name: "Nettoyage du rail de guidage avec de la LOCTITE",
                                        frequency: "2S",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Cabine",
                        elements: [
                            {
                                name: "Poulie de guidage (*2)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
            {
                name: "APC",
                ensembles: [
                    {
                        name: "Contrôleur de diamètre LAZER",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Nettoyage complet (essentiellement les lentilles avec des lingettes\") et vérification du joint d'étanchéité et serrage du couvercle",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur de diamètre",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Contrôleur Nœud",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Nettoyage complet (essentiellement les lentilles avec des lingettes\") et vérification du joint d'étanchéité et serrage du couvercle",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur de diamètre",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Contrôleur Spark (Spark test)",
                        elements: [
                            {
                                name: "",
                                operations: [
                                    {
                                        name: "Vérification d'alignement et centrage du câble par rapport au contrôleur du SPARK",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Nettoyage avec de l'air comprimé et chiffon",
                                        frequency: "E",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Lampe",
                                operations: [
                                    {
                                        name: "Vérification de fonctionnement de la lampe",
                                        frequency: "E",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                    {
                        name: "Goulotte",
                        elements: [
                            {
                                name: "Souffleur",
                                operations: [
                                    {
                                        name: "Nettoyage du souffleur en utilisant une brosse métallique (Fischer)",
                                        frequency: "H",
                                        level: 1,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                    {
                                        name: "Serrage de l'écrou",
                                        frequency: "H",
                                        level: 1,
                                        type: "inspection",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de guidage en S (*3)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Poulie de guidage (*3)",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                            {
                                name: "Rouleaux de guidage",
                                operations: [
                                    {
                                        name: "Nettoyage en utilisant le feutre et vérification de l'état de surface ou de coincement des poulies",
                                        frequency: "H",
                                        level: 2,
                                        type: "nettoyage",
                                        deleted: false,
                                        dueDate: new Date("2024-01-01"),
                                    },
                                ],
                                deleted: false,
                            },
                        ],
                        deleted: false,
                    },
                ],
                deleted: false,
            },
        ],
        params: [
            {
                name: "débit",
                min: 150,
                max: 250,
                deleted: false,
            },
            {
                name: "vitesse",
                min: 1000,
                max: 1500,
                deleted: false,
            },
        ],
        updatedAt: "2024-02-01 00:00:00",
    },
];

async function seedDatabase() {
    try {
        for (const data of seedData) {
            await ChecklistModel.create(data);
        }
        for (const data of seedData2) {
            await UpdatedChecklistModel.create(data);
        }
        console.log("Seed data inserted successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
