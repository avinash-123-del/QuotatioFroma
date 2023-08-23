import React from 'react'
import Header from './Header'
import Total from './Total'
import Footer from './Footer'
const Pricing = () => {
  return (
    <div className='w-[90vw] mt-[30px] m-auto overflow-x-hidden'>
        <Header/>
      <div className='flex justify-end items-center '>
        <Total/>
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing