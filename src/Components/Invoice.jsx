
import React, { useContext, useState } from 'react';
import { AppContext } from './ContextProvider';

const Invoice = () => {
  const { customer, tableData, applyDiscount, invoiceAmount } = useContext(AppContext);
const [printView , setPrintView] = useState(true)
  function handlePrint() {
    setTimeout(() => {
      window.print()
    }, 2000);
    setPrintView(false)
  }

  return (
    <div className='flex flex-col w-[50vw] m-auto mt-[100px] border-2 p-4 border-dashed border-gray-600'>

      <div className='flex justify-between items-start my-8'>
        <div>
          <p>Name: <span className='text-gray-700 font-semibold'>{customer.name}</span></p>
          <p>Email: <span className='text-gray-700 font-semibold'>{customer.email}</span></p>
          <p>Contact: <span className='text-gray-700 font-semibold'>{customer.contact}</span></p>
        </div>
        <div>
          <p>Date: <span className='text-gray-700 font-semibold'>{customer.date}</span></p>
          <p>Customer ID: <span className='text-gray-700 font-semibold'>{Math.ceil(Math.random() * 1000)}</span></p>
        </div>
      </div>

      <div>
        <table className='w-full text-sm text-left text-gray-500'>
          <thead className='bg-violet-600 text-stone-100'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Item
              </th>
              <th scope='col' className='px-6 py-3'>
                Quantity
              </th>
              <th scope='col' className='px-6 py-3'>
                Rate
              </th>
              <th scope='col' className='px-6 py-3'>
                Amount
              </th>
            </tr>
          </thead>
          {/* Render table rows */}
          <tbody>
            {tableData.map((data, id) => (
              <tr key={id} className='bg-transparent text-gray-900 border-none pt-10'>
                <td scope='row' className='px-6 py-4'>
                  {data.item}
                </td>
                <td className='px-6 py-4'>
                  {data.quantity}
                </td>
                <td className='px-6 py-4'>
                  ₹{data.rate}
                </td>
                <td className='px-6 py-4 font-bold'>
                  ₹{data.quantity * data.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr />

      <div className='flex justify-end items-center'>
        <div className='text-2xl btn text-gray-900 mt-[80px]'>
          <h1 className='flex justify-between gap-[100px]'>
            <span><span className='border-b-2 border-gray-500 border-dashed pb-2'>Total</span>(INR)</span>
            <span>₹{invoiceAmount}</span>
          </h1>
          <div className='text-gray-500 text-[12px] px-1 text-start'>
            <p className='mt-5'>(18% GST included)</p>
            <span className='text-green-700 font-bold'>{applyDiscount !== 0 ? 'Discount applied' : ''}</span>
          </div>
        </div>
        <hr />
      </div>
      <button className={printView ? `px-2 py-1 border w-[100px] border-gray-800 rounded-md bg-gray-300` : 'hidden'} onClick={handlePrint}>Print</button>

    </div>


  );
};

export default Invoice;
