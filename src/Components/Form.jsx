import React from 'react'
import Header from './Header'
import Quotation from './Quotation'
import Services from './Services'

const Form = () => {
  return (
 
    <div className='w-[90%] m-auto mt-[80px] '>
      <Header/>
      <div className='relative'>
         <Quotation/>
      <Services/>

      <div className='absolute left-2 top-1 flex flex-col items-center '>
        <span className='bg-[#3c280d] text-stone-50 rounded-full px-[7px] text-sm py-0'>1</span>
        <div className='h-[330px] bg-[#3c280d] w-[1.5px]'></div>
        <span className='bg-[#3c280d] text-stone-50 rounded-full px-[7px] text-sm py-0'>2</span>
      </div>
      </div>
    </div>

 
  )
}

export default Form