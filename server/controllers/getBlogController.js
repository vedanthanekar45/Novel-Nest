import Blog from "../models/blogModel.js";

const getBlog = async (req, res) => {
    try {
      const blogs = await Blog.find().populate('blogAuthor', 'firstName lastName profilePic');
      res.status(200).json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ message: 'Server error, could not fetch blogs.' });
    }
};

export default getBlog;
