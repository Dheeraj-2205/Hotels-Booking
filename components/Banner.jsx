"use client";
import Link from "next/link";
import { useState } from "react";
const Banner = () => {
  const [state,setState] = useState("");

  
  return (
    <div className="bg-gradient-to-r from-green-600 to-light-green-400 h-60">
      <div className="mx-10">
        <div className="text-3xl text-white text-center font-bold">
          Over 10000 Hotels and Villa all over the country
        </div>
      </div>
      <div className="flex justify-center my-5 mx-20">
        <input
          type="text"
          placeholder="Search........."
          className=" w-6/12 h-16 outline-none px-3 text-lg
          border-r-2 border-gray-400 col-span-2"
          onChange={(e) => setState(e.target.value)}
        />
        
        <Link href = {`/hotels?city=${state}`}>
          <button
            type="submit"
            className="h-16 w-60 px-3 py-2 cols-span-1 bg-red-600 hover:cursor-pointer hover:bg-red-400 text-lg text-white"
          >
            Search
          </button>
        </Link>
      </div>
      <div className="flex mx-20 my-5">
        <button
          type="submit"
          className="h-15 px-3 py-2 hover:cursor-pointer
          border-2 border-white text-white 
          mr-5 hover:bg-slate-100 hover:text-black
          rounded-xl
          "
        >
          Search
        </button>
        <button
          type="submit"
          className="h-15 px-3 py-2 hover:cursor-pointer
          border-2 border-white text-white 
          mr-5 hover:bg-slate-100 hover:text-black
          rounded-xl
          "
        >
          Domestic Hotels
        </button>
      </div>
    </div>
  );
};

export default Banner;
