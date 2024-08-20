import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import addBlog from "../controllers/blogController.js";
import getBlog from "../controllers/getBlogController.js";

const router = express.Router();

router.post("/addblog", protectRoute, addBlog)
router.post("/getblog", protectRoute, getBlog);

export default router;