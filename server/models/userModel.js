import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        requires: true,
    },
    userName: {
        type: String,
        requires: true,
    },
    email: {
        type: String,
        requires: true,
    },
    password: {
        type: String,
        requires: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
}, {timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;

