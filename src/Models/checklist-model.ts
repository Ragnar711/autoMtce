import mongoose from "mongoose";

interface ChecklistDoc extends mongoose.Document {
    organe: string;
    operations: Array<string>;
    deleted?: boolean;
}

interface ChecklistAttr {
    organe: string;
    operations: Array<string>;
    deleted?: boolean;
}

interface ChecklistModel extends mongoose.Model<ChecklistDoc> {
    // eslint-disable-next-line no-unused-vars
    build(attr: ChecklistAttr): ChecklistDoc;
}

const checklistSchema = new mongoose.Schema({
    organe: {
        type: String,
        required: true,
        unique: true,
    },
    operations: {
        type: Array<string>,
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false,
    },
});

checklistSchema.statics.build = (attrs: ChecklistAttr) => {
    return new Checklist(attrs);
};

const Checklist = mongoose.model<ChecklistDoc, ChecklistModel>(
    "Checklist",
    checklistSchema,
);

export default Checklist;
