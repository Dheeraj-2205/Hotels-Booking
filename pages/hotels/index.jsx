import React from 'react'
import Hotel from '@/components/Hotel'
import Header from '@/components/Header'
const Hotels = () => {
  return (
    <>
        <Header/>
        <div className="m-5">
        <Hotel/>
        <Hotel/>
        </div>
    </>
  )
}

export default Hotels