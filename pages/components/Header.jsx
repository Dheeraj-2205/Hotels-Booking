import React from "react";
import Image from "next/image";
import Block from "./Block";

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
        <Block title = { 'Became a member' } para ={"in our hotel"} />
        <Block/>
        <Block/>
        <Block/>
      </div>
    </div>
  );
};

export default Header;
