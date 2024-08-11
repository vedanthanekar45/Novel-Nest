import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import authRoutes from "./routes/authRoutes.js"
import connectMongo from "./db/connectToMongo.js"
// import protectRoute from "./middleware/protectRoute.js"

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({}));
dotenv.config();
app.use(express.json())
app.use(cookieParser());

const port = process.env.port;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use("/api/auth", authRoutes);

app.listen(() => {
    connectMongo();
    console.log(`Server's connected to port ${port}`);
})