import React, { useContext } from 'react'
import { VscDiffAdded } from 'react-icons/vsc'
import { CgNotes } from 'react-icons/cg'
import { GrAttachment } from 'react-icons/gr'
import { IoMdCall } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import { AiFillPrinter } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './ContextProvider'


const Footer = () => {
  const {tableData} = useContext(AppContext)
  const router = useNavigate()

  function handlePage(){

    if(tableData.length !== 0){
      router('/invoice')
    }
  }

  return (
    <div className='flex justify-between items-start'>

    <div className='w-[50%]'>
      <div className='flex justify-start items-center'>
        <button className='footer-btn'>
          <VscDiffAdded size={18} color='#7F00FF' /> Add Terms And Conditions
        </button>
        <button className='footer-btn'>
          <CgNotes size={18} color='#7F00FF' />Add Notes
        </button>
        <button className='footer-btn'>
          <GrAttachment size={18} color='#7F00FF' /> Add Attachments
        </button>
      </div>
      <div className='flex justify-start items-center'>
        <button className='footer-btn'>
          <CgNotes size={18} color='#7F00FF' /> Add Additional Info
        </button>
        <button className='footer-btn'>
          <IoMdCall size={18} color='#7F00FF' /> Add Contact Details
        </button>
      </div>
    </div>

    <div className='px-4'>
    <button className='footer-btn '>
          <RiPencilFill size={18} color='#7F00FF' /> Add Signature
        </button>
    <button  onClick={() =>handlePage()} 
     className=' bg-green-300 mt-8 ml-4 flex justify-center items-center gap-2 px-2 py-3 text-gray-800 rounded-md  '>
          <AiFillPrinter size={18} color='#7F00FF'/> Get Invoice
        </button>
    </div>
    </div>
  )
}

export default Footer