import express from "express"
import login from "../controllers/loginController.js"
import logout from "../controllers/logoutController.js"
import signup from "../controllers/signupController.js"

const router = express.Router();

router.post("/login", login)
router.post("/signup", signup)
router.post("/logout", logout)

export default router;