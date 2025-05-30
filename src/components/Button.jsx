import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({prop="Get Started"}) => {
  return (
    <div className='w-fit px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-10'>
        <span className='text-sm font-medium'>{prop}</span> <IoIosReturnRight />
    </div>
  )
}

export default Button