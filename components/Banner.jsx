import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-light-green-400 h-60">
      <div className="mx-10">
        <div className="text-3xl text-white text-center font-bold">
          Over 10000 Hotels and Villa all over the country
        </div>
      </div>
      <div className="grid grid-cols-5 my-5 mx-20">
        <input
          type="text"
          placeholder="Search........."
          className=" h-16 outline-none px-3 text-lg
          border-r-2 border-gray-400 col-span-2"
        />
        <input
          type="text"
          placeholder="Search........."
          className=" h-16 outline-none px-3 text-lg
          border-r-2 border-gray-400 col-span-1"
        />
        <input
          type="text"
          placeholder="Search........."
          className=" h-16 outline-none px-3 text-lg
          border-r-2 border-gray-400 col-span-1"
        />
        <button type="submit" className="h-16 px-3 py-2 cols-span-1 bg-red-600 hover:cursor-pointer hover:bg-red-400">
            Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
