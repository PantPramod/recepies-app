"use client"
import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'

const PrintButton = () => {
  return (
    <button 
        onClick={()=>window.print()}
        className=' hover:underline bg-gray-100 pr-6 py-4 text-sm rounded-sm font-bold w-full'>
          <span className=' border-black sm:border-l  pl-6 '>Print</span>
          <AiFillPrinter
            className='inline ml-2 text-[#186F65]'
            size={20}
          />
        </button>
  )
}

export default PrintButton
