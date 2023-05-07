import React from 'react'
import Image from 'next/image'
import coder from "../images/coder.jpg"

const Logo = () => {
  return ( <div className="flex items-center space-x-2">

    <Image
    className='rounded-full object-cover'
    height={50}
    width={50}
    src={coder}
    alt="logo">

    </Image>
    <h1>BlogApp</h1>
  </div>
  )
}

export default Logo