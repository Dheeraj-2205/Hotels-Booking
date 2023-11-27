import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const Hotel = ({ e }) => {
  return (
    <>
      <Head>
        <title>Hotel List</title>
      </Head>
      <div className=" border-2 border-red-500 rounded-lg h-72 w-full m-5 p-5">
        <div className="flex">
          <Image
            src={
              e.banner
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-96 h-60 mr-3"
          />
          <div className="grid grid-rows-3 gap-2">

            {
              e.gallery?.map((ele)=>(
                <Image 
                  key={ele}
                  src={ele}
                  alt="hotel"
                  width={200}
                  height={200}
                  className="w-28 h-20"
                />
              ))
            }
            
            
          </div>
          <div className="ml-20">
            <h2 className="font-bold text-2xl line-clamp-1">{e.name}</h2>
            <p>{e.description}</p>
            <h3>{e.location}</h3>
            <p className="text-2xl my-5">
              <span className="font-bold">Facilties :</span>
              {e.facilities.map((ele) => (
                <span key={ele.name} className=" mr-10 mb-3 flex items-center">
                  <span>
                    <Image
                      src={ele.img}
                      width={100}
                      height={100}
                      className=" w-8 h-8 rounded-full"
                    />
                  </span>
                  <span>
                    {ele.name}
                  </span>
                </span>
              ))}
            </p>
            <div className="flex">
              <button className=" w-60 h-14 rounded-lg bg-red-600 text-lg text-white font-bold">
                Price : 	&#8377;{e.price}
              </button>
              <Link
                href={`/hotels/${e._id}`}
                className=" text-xl font-bold text-red-600 ml-10"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
