import React from 'react'
import Button from './Button'

const Product = ({elem}) => {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen-xl mx-auto justify-between items-center flex'>
            <h1 className='text-6xl capitalize font-semibold'>{elem.title}</h1>
            <div className='w-1/3'>
                <div><p className='mb-10'>{elem.description}</p></div>
                <div className='flex items-center gap-5'> {(elem.live)&&(<Button />)}
                {(elem.case)&&(<Button prop={"Case Study"}/>)}</div>
            </div>
        </div>    
    </div>
  )
}

export default Product