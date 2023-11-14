import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hotel = ({e}) => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-72 w-full m-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3 gap-2">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-20"
          />
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-20"
          />
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1676968002954-d165313b5601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fHww"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28 h-20"
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1">
           {e?.name}
          </h2>
          <p className=" text-justify my-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            deleniti excepturi perferendis ab sit facere ipsa, quae quisquam est
            quis.
          </p>
          <p className="text-2xl my-5">
            <span className="font-bold">Facilties :</span>
            <span>Free Wifi , Pet Care , Swimming Pool , Beaches , Resort</span>
          </p>
          <div className="flex">
            <button className=" w-60 h-14 rounded-lg bg-red-600 text-lg text-white font-bold">
              Price : 4500
            </button>
            <Link href = {'/hotels/2'} className=' text-xl font-bold text-red-600 ml-10'>See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
