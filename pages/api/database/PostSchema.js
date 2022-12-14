import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    post_owner_id: {
        type: String,
        required: true
    },
    post_owner_name: {
        type: String,
        required: true
    },
    post_location_name: String,
    post: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.models.Post || mongoose.model("Post", postSchema)

