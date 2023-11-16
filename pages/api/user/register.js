import connectDb from "@/db.js";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDb();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All Fields Is Mandatory !",
      });
    }

    const emailExist = await User.findOne({ email });

    if (emailExist) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();

    const token = jwt.sign({ token: result._id }, process.env.JWT_TOKEN, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      success: true,
      message: "Registered Successfully !",
      user: result,
      token,
    });
  }
}
