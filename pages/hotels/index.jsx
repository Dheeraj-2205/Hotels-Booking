import React from 'react'
import Hotel from '@/components/Hotel'
import Header from '@/components/Header'
const Hotels = ({hotels}) => {
  console.log(hotels)
  return (
    <>
        <Header/>
        
        {
          hotels ? hotels.map((e)=>{
            return <div className="m-5">
              <Hotel e = {e}/>
            </div>
          }) : ""
        }
        
    </>
  )
}

export default Hotels


export async function getServerSideProps (e) {
  const res = await fetch(`http://localhost:3000/api/hotels?city=${e.query.city}`);
  const data = await res.json();

  return {
      props : {
        hotels : [data.hotels]
      }
  }
}