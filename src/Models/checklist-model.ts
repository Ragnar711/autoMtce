import mongoose, { Document, Schema, Model } from "mongoose";

interface Operation {
    name: string;
    frequency: "E" | "J" | "H" | "2S";
    level: 1 | 2;
    type: "nettoyage" | "inspection";
    deleted?: boolean;
}

interface Element {
    name: string;
    operations: Operation[];
    deleted?: boolean;
}

interface Ensemble {
    name: string;
    elements: Element[];
    deleted?: boolean;
}

interface System {
    name: string;
    ensembles: Ensemble[];
    deleted?: boolean;
}

interface OperationDocument extends Operation, Document {}
interface ElementDocument extends Element, Document {}
interface EnsembleDocument extends Ensemble, Document {}
interface SystemDocument extends System, Document {}

const OperationSchema: Schema<OperationDocument> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    frequency: {
        type: String,
        required: true,
        enum: ["E", "J", "H", "2S"],
    },
    level: {
        type: Number,
        required: true,
        enum: [1, 2],
    },
    type: {
        type: String,
        required: true,
        enum: ["nettoyage", "inspection"],
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const ElementSchema: Schema<ElementDocument> = new Schema({
    name: {
        type: String,
        default: "",
    },
    operations: [OperationSchema],
    deleted: {
        type: Boolean,
        default: false,
    },
});

const EnsembleSchema: Schema<EnsembleDocument> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    elements: {
        type: [ElementSchema],
        default: [],
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const SystemSchema: Schema<SystemDocument> = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    ensembles: [EnsembleSchema],
    deleted: {
        type: Boolean,
        default: false,
    },
});

export const SystemModel: Model<SystemDocument> = mongoose.model(
    "System",
    SystemSchema,
);
