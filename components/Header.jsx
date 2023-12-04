"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);
  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/");
  };
  return (
    <div className="flex justify-between border-gray-500 items-center h-28 ">
      <Image
        src={"/hotel-logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className=" h-full flex ">
        <Block
          image={"/twenty.png"}
          title={"Became a Vateran member"}
          para={"Additional 20% off on stays"}
        />
        <Block
          image={"/vip.jpeg"}
          title={"Get Your VIP pass "}
          para={"30% off Of Luxury Room "}
        />
        <Block
          image={"/breakfast.png"}
          title={" Free Breakfast "}
          para={" 15% off Of HDFC Card "}
        />
        <Block
          image={"/ten.png"}
          title={" Coupon is also valid "}
          para={"10% off On Rooms "}
        />
        <div className="flex items-center px-3">
          {auth ? (
            <h6 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h6>
          ) : (
            <>
              <Image
                src={"/user.png"}
                alt={"demo"}
                width={200}
                height={200}
                className="w-10 h-10 rounded-full mr-5"
              />

              <Link href={"/login"}className=" text-black text-decoration-none">
                <h6 className="font-bold">Login / SignUp</h6>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
