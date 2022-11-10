import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    birthDate: Date,
    image: {
        type: String,
        default: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
    },
    gender: {
        type: String
    }
}, {timestamp: true})

module.exports = mongoose.models.User || mongoose.model("User", userSchema)