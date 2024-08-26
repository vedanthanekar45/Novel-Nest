import Blog from "../models/blogModel.js";

const addBlog = async (req, res) => {
    try {
        const {blogTitle, blogData} = req.body;
        // const {blogAuthorName, blogAuthorProfilePic} = req.user;
        const userId = req.user._id;

        const newBlog = new Blog({
            blogTitle,
            blogData,
            blogAuthor: userId
        })

        if (newBlog) {
            await newBlog.save();
            res.status(201).json({
                _id: newBlog._id,
                blogTitle: newBlog.blogTitle,
                blogData: newBlog.blogData,
                blogAuthor: newBlog.blogAuthor
            })
        }
    } catch (error) {
        console.log("Error in blog controller: ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default addBlog;