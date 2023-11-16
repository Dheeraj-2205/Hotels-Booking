import mongoose from "mongoose";

const url = process.env.MONGO_URI
const connectDb = async () =>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database is connected")
}

export default connectDb;