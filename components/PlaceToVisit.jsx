import React from 'react'

const PlaceToVisit = () => {
    const List = [
        {
            name : "Bangalore"
        },
        {
            name : "Kolkata"
        },
        {
            name : "Delhi"
        },
        {
            name : "Goa"
        },
        {
            name : "Lakshadweep"
        },
        {
            name : "Itanagar"
        },
        {
            name : "Hyderabad"
        },
        {
            name : "Pondicherry"
        }
    ]
  return (
    <div>
        <div className="flex px-5 bg-gray-200 justify-between">
            {
                List.map((ele,i)=>
                    <span key={i}>{ele.name}</span>
                )
            }
        </div>
    </div>
  )
}

export default PlaceToVisit