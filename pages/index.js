import React from "react";
import Header from "../components/Header";
import PlaceToVisit from "@/components/PlaceToVisit";
import Banner from "@/components/Banner";
import Image from "next/image";
import Head from "next/head";
import Exclusive from "@/components/Exclusive";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Dawn : Best Online Hotel Booking Site
        </title>
        <link rel= "icon" href = "/hotel-logo.png"></link>
      </Head>
      <Header />
      <PlaceToVisit />
      <Banner />
    
      <div className="max-10 my-14">
        <Image
          src={"/banner1.avif"}
          alt="Banner1"
          width={200}
          height={200}
          className="h-80 w-full"
          priority
        />
      </div>
      <div className="mb-14">
        <Image
          src={"/banner2.avif"}
          alt="Banner2"
          width={200}
          height={200}
          className="h-40 w-full"
        />
      </div>

      <Exclusive/>
      <Footer/>
      
    </div>
  );
};

export default Index;
