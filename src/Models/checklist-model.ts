import mongoose from "mongoose";

interface ChecklistDoc extends mongoose.Document {
    organe: string;
    operations: Array<{ operation: string; type: string }>;
}

interface ChecklistAttr {
    organe: string;
    operations: Array<{ operation: string; type: string }>;
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
        type: Array<{ operation: string; type: string }>,
        required: true,
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
