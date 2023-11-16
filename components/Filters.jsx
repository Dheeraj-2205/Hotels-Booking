"use client";

import { useEffect, useState } from "react";

const Filters = () => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const res = await fetch("/api/facilities");
      const { facilities } = await res.json();
      setList(facilities);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);
  return (
    <>
      <div className=" border-red-500 rounded-md m-5 h-auto py-10 px-3">
        <label className=" text-xl">Price : </label>
        <input type="range" name="price" id="proce" min={700} max={3000} />
        <span className=" ml-10">&#8377; 700</span>
      </div>

      <div className=" my-10">
        <h3 className=" font-bold text-xl my-3">Filter By Facilities : </h3>
        {list.map((e) => {
          return (
            <p key={e} className=" grid grid-cols-4">
              <label htmlFor="checkbox" className=" col-span-2">{e}</label>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className=" w-5 h-5 ml-3"
              />
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
