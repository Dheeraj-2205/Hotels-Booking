import connectDb from "@/db";

import Hotel from "@/models/Hotel";

export default async function handler (req,res) {
    connectDb();
    if(req.method === "GET"){
        const facilities = await Hotel.find({}).distinct("facilities.name");
        res.status(200).json({
            success : true,
            facilities
        })

    }
}