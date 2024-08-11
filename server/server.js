import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import authRoutes from "./routes/authRoutes.js"
import connectMongo from "./db/connectToMongo.js"
import protectRoute from "./middleware/protectRoute.js"

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({}));
dotenv.config();
app.use(express.json())
app.use(cookieParser());

const port = process.env.port;

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectRoute, (req, res) => {
    res.status(200).json({message: "This is a protected route.", user: req.user})
})

app.listen(() => {
    connectMongo();
    console.log(`Server's connected to port ${port}`);
})