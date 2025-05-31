import React from 'react'

const Marqee = ({elem}) => {
  return (
    <div className='w-full py-8 flex gap-10 overflow-hidden '>
        {elem.map((scrLink,index)=>(
            <img src={scrLink} className='w-54 flex-shrink-0' />
        ))}
    </div>
  )
}

export default Marqee