import React from "react";
import Header from "../components/Header";
import PlaceToVisit from "@/components/PlaceToVisit";
import Banner from "@/components/Banner";
import Image from "next/image";
const Index = () => {
  return (
    <div>
      <Header />
      <PlaceToVisit />
      <Banner />
    
      <div className="max-10 my-14">
        <Image
          src={"/luxury.jpg"}
          alt="Banner1"
          width={200}
          height={200}
          className="h-80 w-full"
        />
      </div>
      <div className="mb-14">
        <Image
          src={""}
          alt="Banner2"
          width={200}
          height={200}
          className="h-40 w-full"
        />
      </div>
      
    </div>
  );
};

export default Index;
