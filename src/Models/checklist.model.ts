import mongoose, { Document, Schema, Model, Types } from "mongoose";

interface Operation {
    name: string;
    frequency: "E" | "J" | "H" | "2S";
    level: 1 | 2;
    type: "nettoyage" | "inspection" | "réglage";
    deleted?: boolean;
    dueDate: Date;
    status?: boolean;
}

interface Element {
    name?: string;
    operations: Types.ObjectId[]; // References to Operation documents
    deleted?: boolean;
}

interface Ensemble {
    name?: string;
    elements: Types.ObjectId[]; // References to Element documents
    deleted?: boolean;
}

interface System {
    name: string;
    ensembles: Types.ObjectId[]; // References to Ensemble documents
    deleted?: boolean;
}

interface Params {
    name: string;
    min: number;
    max: number;
    deleted?: boolean;
}

export interface Checklist {
    systems: Types.ObjectId[]; // References to System documents
    params: Types.ObjectId[]; // References to Params documents
}

export interface OperationDocument extends Operation, Document {}
interface ElementDocument extends Element, Document {}
interface EnsembleDocument extends Ensemble, Document {}
interface SystemDocument extends System, Document {}
interface ParamsDocument extends Params, Document {}
interface ChecklistDocument extends Checklist, Document {}

const OperationSchema: Schema<OperationDocument> = new Schema({
    name: {
        type: String,
        required: true,
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
        enum: ["nettoyage", "inspection", "réglage"],
    },
    deleted: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

const ElementSchema: Schema<ElementDocument> = new Schema({
    name: {
        type: String,
        default: "",
    },
    operations: [{ type: Schema.Types.ObjectId, ref: "Operation" }], // Reference to Operation documents
    deleted: {
        type: Boolean,
        default: false,
    },
});

const EnsembleSchema: Schema<EnsembleDocument> = new Schema({
    name: {
        type: String,
        default: "",
    },
    elements: [{ type: Schema.Types.ObjectId, ref: "Element" }], // Reference to Element documents
    deleted: {
        type: Boolean,
        default: false,
    },
});

const SystemSchema: Schema<SystemDocument> = new Schema({
    name: {
        type: String,
        required: true,
    },
    ensembles: [{ type: Schema.Types.ObjectId, ref: "Ensemble" }], // Reference to Ensemble documents
    deleted: {
        type: Boolean,
        default: false,
    },
});

const paramsSchema: Schema<ParamsDocument> = new Schema({
    name: {
        type: String,
        required: true,
    },
    min: {
        type: Number,
        required: true,
        min: 0,
    },
    max: {
        type: Number,
        required: true,
        min: 0,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const checklistSchema: Schema<ChecklistDocument> = new Schema({
    systems: [{ type: Schema.Types.ObjectId, ref: "System" }], // Reference to System documents
    params: [{ type: Schema.Types.ObjectId, ref: "Params" }], // Reference to Params documents
});

export const OperationModel: Model<OperationDocument> = mongoose.model(
    "Operation",
    OperationSchema,
);

export const ElementModel: Model<ElementDocument> = mongoose.model(
    "Element",
    ElementSchema,
);

export const EnsembleModel: Model<EnsembleDocument> = mongoose.model(
    "Ensemble",
    EnsembleSchema,
);

export const SystemModel: Model<SystemDocument> = mongoose.model(
    "System",
    SystemSchema,
);

export const ParamsModel: Model<ParamsDocument> = mongoose.model(
    "Params",
    paramsSchema,
);

export const ChecklistModel: Model<ChecklistDocument> = mongoose.model(
    "Checklist",
    checklistSchema,
);
