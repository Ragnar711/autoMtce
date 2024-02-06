import mongoose, { Document, Schema, Model } from "mongoose";

export interface Operation {
    name: string;
    frequency: "E" | "J" | "H" | "2S";
    level: 1 | 2;
    type: "nettoyage" | "inspection";
    deleted?: boolean;
    dueDate?: Date;
    status: boolean;
}

export interface Element {
    name: string;
    operations: Operation[];
    deleted?: boolean;
}

export interface Ensemble {
    name: string;
    elements: Element[];
    deleted?: boolean;
}

export interface System {
    name: string;
    ensembles: Ensemble[];
    deleted?: boolean;
}

export interface Params {
    name: string;
    min: number;
    max: number;
    deleted?: boolean;
}

export interface Checklist {
    systems: System[];
    params: Params[];
}

interface OperationDocument extends Operation, Document {}
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
        enum: ["nettoyage", "inspection"],
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
    },
    ensembles: [EnsembleSchema],
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
    },
    max: {
        type: Number,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

const checklistSchema: Schema<ChecklistDocument> = new Schema({
    systems: [SystemSchema],
    params: [paramsSchema],
});

export const ChecklistModel: Model<ChecklistDocument> = mongoose.model(
    "Checklist",
    checklistSchema,
);
