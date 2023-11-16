import connectDb from "@/db";

export default async function handler (req,res){
    if(req.method === 'GET'){
        connectDb();
        
    }

}