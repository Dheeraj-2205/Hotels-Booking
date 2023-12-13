"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { Carousel } from "react-bootstrap";

const SingleHotel = ({ hotel }) => {
  let router = useRouter();
  let [auth, setAuth] = useState(false);

  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);

  const LoginRedirect = () => {
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div
        className="w-7/12 m-auto my-10
      "
      >
        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          {hotel.gallery.map((item,i) => (
            <Carousel.Item
              key={i}
              interval={4000}
              // className={""}
            >
              <Image src={item} alt="slides" width={2000} height={2000} className="w-full h-large-box my-5" />
            </Carousel.Item>
          ))}
        </Carousel> */}
        <Image
          src={hotel.banner}
          alt="hotel"
          width={2000}
          height={2000}
          className="w-full h-large-box my-5"
        />
        ;
        <div className=" mx-20">
          <h3 className=" text-3xl font-bold">{hotel?.name}</h3>
          <p className=" text-xl my-5 text-justify">{hotel?.description}</p>
          <button className=" w-60 h-14 rounded-lg bg-slate-600 text-lg text-white font-bold">
            &#8377;{hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities : </p>
          <ul className=" flex text-xl justify-between">
            {hotel
              ? hotel.facilities?.map((ele,i) => (
                  <span
                    key={i}
                    className=" mr-10 mb-3 flex items-center"
                  >
                    <span>
                      <Image
                        src={ele.img}
                        alt="facilities"
                        width={100}
                        height={100}
                        className=" w-8 h-8 rounded-full"
                        priority
                      />
                    </span>
                    <span>{ele.name}</span>
                  </span>
                ))
              : ""}
          </ul>
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className=" w-60 h-14 rounded-lg bg-green-400 text-lg text-white font-bold my-5">
                Book Now
              </button>
            </Link>
          ) : (
            <button
              className=" w-60 h-14 rounded-lg bg-red-600 text-lg text-white font-bold my-5"
              onClick={LoginRedirect}
            >
              Please Login{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleHotel;

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.FRONTEND_URI}/api/hotels/${ctx.query.id}`
  );
  const data = await res.json();
  return {
    props: {
      hotel: data.hotel,
    },
  };
}
