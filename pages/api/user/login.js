import connectDb from "@/db"
import User from "@/models/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

export default async function handler (req,res){
    if(req.method === 'POST'){

        connectDb();
        const {email,password} = req.body;

        if(!email && !password){
            return res.status(401).json({
                success : false,
                message : "Email And Password Required"
            })
        }
        
        const emailExists = await User.findOne({email});

        if(!emailExists){
            return res.status(400).json({
                success : false,
                message : "Please Register ...... !"
            })
        }
        const passwordMatch = await bcrypt.compare(password, emailExists.password);
        
        if(!passwordMatch){
            return res.status(400).json({
                success : false,
                message : "Invalid Credentials"
            })
        }

        const token = jwt.sign({token : emailExists._id},process.env.JWT_TOKEN,{
            expiresIn: "30d"
        })
        res.status(200).json({
            message :"LoggedIn Successfully !" ,
            token
        })
    }
}