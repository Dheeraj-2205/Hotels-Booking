import connectDb from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";

export default async function handler(req,res){
    
    if(req.method === "POST"){
        connectDb();

        const razorpay = new Razorpay({
            key_id : process.env.RAZORPAY_KEY,
            key_secret : process.env.RAZORPAY_SECRET
        });

        const amount = 10;

        const options = {
            amount : (amount *100).toString(),
            currency : "INR",
            receipt : shortid.generate(),
            payment_capture :1
        }


        try {
            const result = await razorpay.orders.create(options);
           
            return res.status(201).json({
                id : result.id,
                currency : result.currency,
                amount  :result.amount

            })
        } catch (error) {
            console.log(error)
            res.status(400).json({error});
        }
    }
}



