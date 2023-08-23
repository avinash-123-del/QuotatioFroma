import React, { useContext } from 'react'
import { AppContext } from './AppProvider'

const GeneratedQuotation = () => {

    const {input , services , totalPrice , billPrice , tax, discount} = useContext(AppContext)

  return (
    <div className='w-[60%] m-auto '>
        <div className='flex justify-between items-start my-8'>
        <div>
          <p>Customer Name: <span className='text-gray-700 font-semibold'>{input.customerName}</span></p>
          <p>Email: <span className='text-gray-700 font-semibold'>{input.email}</span></p>
          <p>Mobile No.: <span className='text-gray-700 font-semibold'>{input.mobileNum}</span></p>
        </div>
        <div>
          <p>Country: <span className='text-gray-700 font-semibold'>{input.country}</span></p>
          <p>City: <span className='text-gray-700 font-semibold'>{input.city}</span></p>
          <p>Payment: <span className='text-gray-700 font-semibold'>{input.payment}</span></p>
        </div>
      </div>

      <table className='text-center w-full mt-[20px]'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Services</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map(data => (
            <tr key={data.id}>
              <td className='p-2 border-4 border-stone-100'>{data.id}</td>
              <td>{data.Services}</td>
              <td>{data.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>

<div className='flex flex-col justify-end items-end mr-2 mt-3'>
  <p>Items Price : {billPrice}</p>
  <p>Discount : {discount}</p>
  <p>Tax : {tax}%</p>
  <h3 className='font-bold'>Total Price : {totalPrice}</h3>
</div>
    </div>
  )
}

export default GeneratedQuotation