import mongoose from "mongoose";

const url = "mongodb+srv://djsays124:t7BXahBKIAjUYwYG@cluster0.2fzlrse.mongodb.net/DAWN"
const connectDb = async () =>{
    await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database is connected")
}

export default connectDb;