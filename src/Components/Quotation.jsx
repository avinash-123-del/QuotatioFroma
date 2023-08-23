import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './AppProvider'

const Quotation = () => {

    const {selectedPrices , input, setInput} = useContext(AppContext)

    const [isCountryValid, setisCountryValid] = useState(true)
    const [isPaymentValid, setisPaymentValid] = useState(true)

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (input.country.length === 0 || input.country === 'select country') {
            setisCountryValid(false)
        }
        else {
            setisCountryValid(true)
        }

    }, [input.country, setisCountryValid, selectedPrices])


    useEffect(() => {
        if (input.payment.length === 0 || input.payment === 'select payment') {
            setisPaymentValid(false)
        }
        else {
            setisPaymentValid(true)
        }
    }, [input.payment, setisPaymentValid])


    return (
        <div className=''>
            <div>
                <h3 className='text-lg font-bold text-start ml-9'>Quotation Information</h3>
            </div>
            <form action="" 
                className='text-center mt-[40px] pl-12 grid grid-cols-3 justify-around items-center quotation gap-3'>

                <div className='flex flex-col justify-around items-start '>
                    <label htmlFor="" className='relative font-bold text-sm mb-2'>CUSTOMER NAME <span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <input type="text"
                        name='customerName'
                        required
                        placeholder='customer Name'
                        value={input.customerName}
                        onChange={handleChange} />
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="" className='relative font-bold text-sm mb-2'>EMAIL<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <input type="email"
                        name='email'
                        required
                        placeholder='username@example.com'
                        value={input.email}
                        onChange={handleChange} />
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="" className='relative font-bold text-sm mb-2'>MOBILE NO.<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <input type="text"
                        name='mobileNum'
                        required
                        maxLength="10"
                        placeholder='Mobile Number'
                        value={input.mobileNum}
                        onChange={handleChange} />
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="country" className='relative font-bold text-sm mb-2'>COUNTRY<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <select name="country" id="country" onChange={handleChange} required className={`${isCountryValid ? 'text-gray-900 ' : 'text-gray-400'}`}>
                        <option value='' className='bg-gray-300'>select country</option>
                        <option value='india' >India</option>
                        <option value='america' >America</option>
                        <option value='egypt' >Egypt</option>
                    </select>
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="" className='relative font-bold text-sm mb-2'>CITY<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <input type="text"
                        name='city'
                        required
                        placeholder='City'
                        value={input.city}
                        onChange={handleChange} />
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="" className='relative font-bold text-sm mb-2'>ADDRESS<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <input type="text"
                        name='address'
                        required
                        placeholder='Address'
                        value={input.address}
                        onChange={handleChange} />
                    
                </div>

                <div className='flex flex-col justify-start items-start'>
                    <label htmlFor="payment" className='relative font-bold text-sm mb-2'>PAYMENT<span className='absolute text-red-500 right-[-10px]'>*</span></label>
                    <select name="payment" id="payment" onChange={handleChange} required className={`${isPaymentValid ? 'text-gray-900 ' : 'text-gray-400'}`}>
                        <option value='' className='bg-gray-300'>Payment Terms</option>
                        <option value='COD' >COD</option>
                        <option value='Paypal' >Paypal</option>
                        <option value='EMI' >EMI</option>
                    </select>
                    
                </div>

            </form>
            <br /><br />

        </div>
    )
}

export default Quotation