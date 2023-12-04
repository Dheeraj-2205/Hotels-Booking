import React from 'react'
import Image from 'next/image'
const Block = ({title, para, image}) => {
  return (
    <div className='border-r border-gray-300 w-60 h-full flex items-center'>
        <Image src = {image} alt='' width={200} height={200} className='w-10 h-10 rounded-full mr-5' />
        <div>
          <h6 className='font-bold'> {title}</h6> 
          <p className="text-gray-400 text-xs line-clamp-1"> {para} </p>
        </div>
    </div>
  )
}

export default Block