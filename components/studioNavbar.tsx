import React from 'react'
import Link from 'next/link'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

const studioNavbar = (props :any) => {
  return (
    <div className='bg-[rgb(26,26,26)]'>
        <div className='flex items-center justify-between p-5'>
            <Link href="/" className='text-[#f7AB0A] flex items-center' >
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2'/>
                Go To Website
            </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
            <h1 className='font-bold text-white'>
                Want Coding challenges & solution sent to your inbox daily?
            </h1>
            <Link href="www.google.com" className='text-[#F7AB0A] font-bold ml-2'>
                Blogapp.com/google
        
            </Link>
        </div>

        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default studioNavbar