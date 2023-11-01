"use client";

import Image from "next/image";
import Link from "next/link";
const Exclusive = () => {
  return (
    <div className=" flex justify-center my-14 border border-gray-300 rounded-lg px-5">
      <div className="flex items-center">
        <Image
          src="/blueFire.png"
          width={200}
          height={200}
          alt="fire"
          className="w-30 h-30 rounded-full mr-5"
        />
      </div>
      <div className=" text-xl ">
        <p className="font-bold"></p>
        <p></p>
      </div>

      <div>
        <input
          type="email"
          className=" px-6 py-3 outline-none border border-gray-300 rounded-lg mr-5"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className="w-24 h-14 bg-red-500 text-xl text-white cursor-pointer"
        >
          Notify
        </button>

        <Link href={"#"}>Baby</Link>
      </div>
    </div>
  );
};

export default Exclusive;
