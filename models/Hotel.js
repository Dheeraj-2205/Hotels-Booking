import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    location : {
        type : String,
        required:true
    },
    banner : {
        type : String,
        required : true
    },
    gallery : [
        {
            type : String
        }
    ],
    price : {
        type : Number
    },
    facilities : [
        {
            img : String,
            name : String
        }
    ],
    
},{timestamps :true});


export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema)