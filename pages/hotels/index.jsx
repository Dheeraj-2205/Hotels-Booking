import React from "react";
import Hotel from "@/components/Hotel";
import Header from "@/components/Header";
const Hotels = ({hotels}) => {
  return (
    <>
      <Header />

      {hotels
        ? hotels.map((e) => {
            return (
              <div className="m-5" key={e._id}>
                <Hotel e={e} />
              </div>
            );
          })
        : ""}
    </>
  );
};
export default Hotels

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${FRONTEND_URI}/api/hotels?city=${context.query.city}`);

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
