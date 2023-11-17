import connectDb from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler (req,res){
    if(req.method === 'GET'){
        connectDb();
        const key = req.query.val;
        const hotels = await Hotel.find({'facilities.name' :{$in:key}});

        res.status(200).json({
            success : true,
            hotels
        })
    }

}