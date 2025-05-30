import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marqees from './components/Marqees'

const App = () => {
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marqees/>
    </div>
  )
}

export default App