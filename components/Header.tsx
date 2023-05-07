import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../app/globals.css'
import image from '../images/coder.jpg'

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
        <Link href="/">
            <Image
                src={image}
                width={50}
                className='rounded-full'
                height={50}
                alt='logo'
            />

            
        </Link>
        <h1>This is BlogStack</h1>
        </div>
        <div>
            <Link
            href="/studio"
            className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0A] flex items-center rounded-full text-center'
            >
                Sign up to the BlogApp
            </Link>
        </div>
    </header>
  )
}

export default Header