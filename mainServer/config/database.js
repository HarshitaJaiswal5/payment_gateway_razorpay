import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/razor"

export const connectDB = async() => {


    const [connectDb ] = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB is connected with ${connection.host}`)

}