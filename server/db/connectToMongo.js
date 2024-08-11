import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database")
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

export default connectMongo;