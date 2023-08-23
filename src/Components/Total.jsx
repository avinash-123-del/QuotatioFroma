import React, { useContext, useEffect, useState } from 'react'
import { BsTag } from 'react-icons/bs'
import { VscDiffAdded } from 'react-icons/vsc'
import { AppContext } from './ContextProvider'
import Discount from './Discount'

const Total = () => {

  const { tableData, applyDiscount, setDiscount, discount, setInvoiceAmount } = useContext(AppContext)

  let total = 0


  tableData.map((element, i) => {
    total += parseInt(element.rate) * parseInt(element.quantity)
    total = total * 0.18 + total
    console.log("tableData index",);
  });

  if (applyDiscount !== 0) {
    total = total - total * applyDiscount
    console.log("net Amount", total);
  }
  useEffect(() => {
    setInvoiceAmount(total.toFixed(2))
  }, [total])

  // console.log("lamba" , tableData.length )

  return (
    <div className='my-[50px] flex flex-col text-sm gap-5 text-gray-600 relative '>
      <button className='btn' onClick={() => setDiscount(!discount)}>
        <BsTag size={18} color='gray' /> Add Discounts/Additional Charges
      </button>
      <button className='btn cursor-pointer'>
        <input type="checkbox" className='bg-[#e8f4f8]' id='id' /> <label htmlFor="id">Summarise Total Quantity</label>
      </button>
      <hr />
      <div className='text-2xl btn text-gray-900'>
        <h1 className='flex justify-between gap-[100px]'><span><span className='border-b-2 border-gray-500 border-dashed pb-2'>Total</span>(INR)</span><span>₹{total.toFixed(2)}</span> </h1>
      </div>
      <div className='text-gray-500 text-[12px] px-1 text-start'>
        <p >(18% GST included)</p>
        <span className='text-green-700 font-bold'>{applyDiscount !== 0 ? 'discount applied' : ''}</span>
      </div>
      <hr />
      <button className='btn'>
        <span className='text-gray-600 text-[15px] font-semibold'>
          ⓢ
        </span>
        Show Total In Words
      </button>
      <button className='btn'>
        <VscDiffAdded size={18} color='gray' /> Add more fields
      </button>

      <div className={`border rounded-l-lg p-4 bg-gradient-to-b top-[150px] z-10
       from-blue-100 to-blue-50 absolute w-[300px] transform duration-300 ${discount ? 'translate-x-0' : 'translate-x-[350px]'}`}>
        <Discount />
      </div>

    </div>
  )
}

export default Total