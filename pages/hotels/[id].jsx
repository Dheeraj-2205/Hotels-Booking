import React from "react";
import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 m-auto my-10">
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5"
      />
      <div className=" mx-20">
        <h3 className=" text-3xl font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quae
          nesciunt alias autem debitis ex?
        </h3>
        <p className=" text-xl my-5 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          provident est at maxime aliquid, modi praesentium earum enim vero quam
          ducimus voluptate numquam voluptates ex, porro molestiae corrupti
          necessitatibus molestias eveniet totam deserunt. Atque reprehenderit
          aperiam beatae non, consectetur incidunt praesentium, dolorum mollitia
          repellat molestiae error id enim deserunt velit.
        </p>
        <button className=" w-60 h-14 rounded-lg bg-slate-600 text-lg text-white font-bold">
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className=" flex text-xl justify-between">
            <li>Swimming Pool</li>
            <li>Wifi</li>
            <li>Gym</li>
        </ul>
        <button className=" w-60 h-14 rounded-lg bg-red-600 text-lg text-white font-bold my-5">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;


// password : t7BXahBKIAjUYwYG
// user  :djsays124
