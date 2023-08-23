import React, { useState, useContext, useEffect } from 'react'
import { VscClose, VscDiffAdded } from 'react-icons/vsc'
import { CiEdit } from 'react-icons/ci'
import { PiImageSquare } from 'react-icons/pi'
import { ImArrowDown2 } from 'react-icons/im'
import { MdOutlineInsertLink } from 'react-icons/md'
import { AppContext } from './ContextProvider'

const Header = () => {

    const { setTotalAmount, tableData, setTableData } = useContext(AppContext)


    const [input, setInput] = useState({ item: '', quantity: '', rate: '' })
    const [form, setForm] = useState(false)
    // const [amount , setAmount] = useState(0)
    const [edit, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let amount = input.rate * input.quantity
        setTotalAmount(amount)
    }, [input.rate, input.quantity, setTotalAmount])


    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (edit) {
            Object.assign(tableData[editIndex], input)
            setTableData([...tableData])
            setInput({
                item: '', rate: '', quantity: ''
            })
            setEdit(false)
            setForm(true)
        }
        else {
            setInput({
                item: '', quantity: '', rate: ''
            })
            setTableData(prev => [...prev, input])
        }

    }


    function handleEdit(index) {
        setForm(true)
        setInput({
            item: tableData[index].item,
            quantity: tableData[index].rate,
            rate: tableData[index].quantity
        })
        setEditIndex(index)
        setEdit(true)
    }

    function handleDelete(index) {
        setTableData(tableData.filter((item, id) => id !== index))
    }

    return (
        <div>
            <div className={form ? `` : 'hidden'}>
                <form action="" onSubmit={handleSubmit}
                    className={`text-center bg-[#e8f4f8] mt-[50px] flex justify-around border my-4 items-center gap-4 py-2`}>
                    <input type="text"
                        name='item'
                        required
                        placeholder='item'
                        value={input.item}
                        onChange={handleChange} autoFocus />

                    <input type="number"
                        name='quantity'
                        required
                        placeholder='quantity'
                        value={input.quantity}
                        onChange={handleChange} />
                    <input type="number"
                        name='rate'
                        required
                        placeholder='rate'
                        value={input.rate}
                        onChange={handleChange} />

                    <button onClick={() => setForm(!form)}
                        className='p-2 flex justify-start items-center gap-2 text-sm text-gray-600 border border-gray-400 rounded-lg'><VscDiffAdded size={15} color='gray' />Add</button>

                </form>
            </div>


            <table className='w-full text-sm text-left text-gray-500 '><thead className=" bg-violet-600 text-stone-100  ">
                <tr className=''>
                    <th scope="col" className="px-6 py-3" >
                        Item
                    </th>
                    <th scope="col" className="px-14 w-[18%]  py-3">
                        Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Rate
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                        Actions
                    </th>
                </tr>
            </thead></table>

            {tableData.map((data, id) => (

                <div key={id} className="relative overflow-x-auto bg-[#e8f4f8] mb-8">

                    <table className="w-full text-sm text-left text-gray-500 ">
                        <tbody>
                            <tr className="bg-transparent text-gray-900 border-none pt-10">
                                <td className="px-6 py-4 ">
                                    {data.item}
                                    <div className='h-[1px] mt-2 w-full bg-gray-400 '></div>
                                </td>
                                <td className="px-6 py-4  ">
                                    {data.quantity}
                                    <div className='h-[1px] mt-2 w-full bg-gray-400 '></div>
                                </td>
                                <td className="px-6 py-4 ">
                                    ₹{data.rate}
                                    <div className='h-[1px] mt-2 w-full bg-gray-400 '></div>
                                </td>

                                <td className="px-6 py-4  font-bold " >
                                    ₹{(data.quantity * data.rate).toFixed(2)}
                                    <div className='h-[1px] mt-2 w-full bg-gray-400 '></div>
                                </td>
                                <td className='flex justify-center mb-2 ml-6 w-[50%] gap-4 items-end mt-5 '>
                                    <span className='cursor-pointer'><CiEdit size={25} color='#808080' onClick={() => handleEdit(id)} /></span>
                                    <span className='cursor-pointer'><VscClose size={25} color='#808080' onClick={() => handleDelete(id)} /></span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className='flex items-start justify-between text-gray-600 text-sm mt-5 cursor-pointer'>
                        <div className='flex justify-start items-center h-8 gap-[100px] px-6 pt-3 pb-12 '>
                            <button className='flex items-center justify-start gap-1'><VscDiffAdded size={20} color='gray' />Add Description</button>
                            <button className='flex items-center justify-start gap-1'><PiImageSquare size={20} color='gray' />Add Thumbnail</button>
                        </div>
                        <div className='flex justify-start items-center pr-[50px]'>
                            <MdOutlineInsertLink color='#808080' size={20} className='mr-2' /> Insert an item below <span><ImArrowDown2 color='#808080' size={15} className='ml-[50px]' /></span>
                        </div>
                    </div>
                </div>

            ))
            }

            <button onClick={() => setForm(true)}
                className='flex items-center justify-center my-10 bg-[#e8f4f8] py-3 border-2  border-dashed w-full border-gray-300 text-sm text-gray-500 gap-2'><VscDiffAdded size={20} /> Add New Line</button>



        </div>
    )
}

export default Header