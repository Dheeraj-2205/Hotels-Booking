import connectDb from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDb();

    try {
      const hotels = await Hotel.find({ price: { $lte: req.query.price } });
      console.log(hotels);

      res.status(200).json({
        success: true,
        hotels,
      });
    } catch (error) {
        console.log(error)
    }
  }
}
