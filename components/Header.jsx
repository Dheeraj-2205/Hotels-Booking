import React from "react";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";

const Header = () => {
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
          title={"Became a Vateran member"}
          para={"Additional 10% off on stays"}
        />
        <Block title={"Get Your VIP pass "} para={"30% off Of Luxury Room "} />
        <Block />
        <Block />
        <div className="flex items-center px-3">
          <Image src={""} alt={"demo"} width={200} height={200} className="w-10 h-10 rounded-full mr-5" />
          <Link href= {"/login"}><h3 className="font-bold">Login / SignUp</h3></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
