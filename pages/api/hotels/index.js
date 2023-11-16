import connectDb from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler (req,res){
    connectDb();
    // if(req.method === "POST"){
    //     const newHotel = new Hotel(req.body);
    //     const result = await newHotel.save();
    //     res.status(201).json({
    //         message : "Hotel Added",
    //         result
    //     })
    // }

    if(req.method === "GET"){
        const hotels = await Hotel.find({ location : req.query.city });

        if(hotels.length > 0){
            return res.status(200).json({
                success : true,
                hotels
            })
        };

        const allHotels  = await Hotel.find({});
        res.status(200).json({
            success : true,
            allHotels
        })
    }
}

