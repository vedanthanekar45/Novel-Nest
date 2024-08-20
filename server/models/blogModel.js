import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,
    },
    blogData: {
        type: String,
        required: true,
    },
    blogAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true})

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;