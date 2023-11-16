import Hotel from "@/models/Hotel";
import connectDb from "@/db";
export default async function handler (req,res){
    if(req.method === "GET"){
        connectDb();
        if(req.query.id){
            const hotel  =  await Hotel.findById(req.query.id);
            res.status(200).json({
                success : true,
                hotel
            })

        }
    }
}


