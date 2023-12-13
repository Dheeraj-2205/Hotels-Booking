import React, { useEffect, useState } from "react";
import Hotel from "@/components/Hotel";
import Header from "@/components/Header";
import Filters from "@/components/Filters";
import axios from "axios";
const Hotels = ({ hotels }) => {
  const [list, setList] = useState([]);
  const [prices, setPrices] = useState(3500);
  const [checkedList, setCheckedList] = useState([]);


  const handleCheckList = async() =>{
    const {data} = await axios.get(`/api/facilities/search?val=${checkedList}`);

    if(data?.hotels){
      let newArr = data.hotels;
      setList(newArr)
    }
  }

  const handlePrice = async () => {
    const res = await fetch(`/api/facilities/range?price=${prices}`);
    const data = await res.json();

    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(()=>{
    if(checkedList){
      handleCheckList();
    }
    handlePrice();
  },[checkedList,handleCheckList,handlePrice]);



  return (
    <>
      <Header />

      <div className=" grid grid-cols-12">
        <div className="col-span-3">
          <Filters
            prices={prices}
            setPrices={setPrices}
            handlePrice={handlePrice}
            checkedList = {checkedList}
            setCheckedList = {setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className="m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className="m-5 col-span-9" key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
export default Hotels;

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      `${process.env.FRONTEND_URI}/api/hotels?city=${context.query.city}`
    );

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const data = await res.json();

    return {
      props: {
        hotels: data.hotels ? data.hotels : data.allHotels,
      },
    };
  } catch (error) {
    console.error("Error fetching hotels:", error);

    return {
      props: {
        hotels: null,
      },
    };
  }
}
