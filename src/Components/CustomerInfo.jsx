import React, { useContext, useState } from 'react'
import { AppContext } from './ContextProvider'
// import { useRouter } from 'next/navigation'
import { useNavigate } from 'react-router-dom'
const CustomerInfo = () => {

  const { customer, setCustomer } = useContext(AppContext)
  const [submit, setSubmit] = useState(false)
const nav = useNavigate()
  function handleChange(e) {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })

  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmit(true)
    setTimeout(() => {
      nav('/pricing')
    }, 500);
    setSubmit(false)
  }

  return (
    <div className='w-[40vw] border m-auto bg-gradient-to-b from-blue-300 to-blue-100 py-8 mt-[80px]'>
      <h1 className='text-center font-bold text-gray-800 text-lg'>Fill the customer Details</h1>

      <form action="" onSubmit={handleSubmit}
        className=' mt-[50px] flex flex-col justify-start items-center text-start gap-4  '>

        <div className='flex justify-around items-center gap-2'>
          <label htmlFor="">Name </label>
          <input type="text"
            name='name'
            required
            placeholder='Enter Name'
            value={customer.name}
            onChange={handleChange} />
        </div>

        <div className='flex justify-around items-center gap-2'>
          <label htmlFor="">Email</label>
          <input type="text"
            name='email'
            required
            placeholder='Enteremail@.com'
            value={customer.email}
            onChange={handleChange} />
        </div>

        <div className='flex justify-around items-center gap-2 mr-5'>
          <label htmlFor="">Contact</label>
          <input type="number"
            name='contact'
            required
            maxLength="10"
            placeholder='0000000000'
            value={customer.contact}
            onChange={handleChange} />
        </div>

        <div className='flex justify-around items-center gap-2 mr-[40px]'>
          <label htmlFor="">Date</label>
          <input type="date"
            name='date'
            required
            placeholder='00/00/0000'
            value={customer.date}
            onChange={handleChange} />
        </div>


        <button className='bg-gradient-to-r from-blue-500 to-blue-800 text-white px-3 py-1 rounded-lg'>{submit ? 'please wait...' : 'submit'}</button>
      </form>
    </div>
  )
}

export default CustomerInfo