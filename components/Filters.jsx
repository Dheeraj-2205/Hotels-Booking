"use client";

import { useEffect, useState } from "react";
//
const Filters = ({ prices, setPrices, handlePrice, checkedList, setCheckedList }) => {
  // const [prices, setPrices] = useState(700);
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

  const handleCheckList = (e) =>{
    let newList = [];
    if(e.target.checked){
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }else{
      newList = newList.filter((i) => i !== e.target.value);
      setCheckedList(newList);
    }
  }

  useEffect(() => {
    fetchFacilities();
    handleCheckList();
  }, [fetchFacilities,handleCheckList]);

  return (
    <>
      <div className=" border rounded-md m-5 h-auto py-10 px-3">
        <label className=" text-xl">Price : </label>
        <input
          type="range"
          name="price"
          id="proce"
          min={700}
          max={3000}
          onChange={(e) => setPrices(e.target.value)}
          defaultValue={prices ? prices : ""}
        />
        <span className=" ml-10 text-lg">&#8377; {prices}</span>
      </div>
      <div>
        {/* } */}
        <button
          className=" h-10 w-40 bg-blue-600 cursor-pointer my-3 text-white font-bold : 600 ml-5 rounded-md hover:bg-blue-500"
          onClick={handlePrice}
        >
          Search
        </button>
      </div>
      <div className=" my-10 p-4 box-border border" >
        <h3 className=" font-bold text-xl my-3">Filter By Facilities : </h3>
        {list.map((e) => {
          return (
            <p key={e} className=" grid grid-cols-4">
              <label htmlFor="checkbox" className=" col-span-2">
                {e}
              </label>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className=" w-5 h-5 ml-3"
                value={e}
                onChange={handleCheckList}
              />
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
