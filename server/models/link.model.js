import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    tags: [{ type: String }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;