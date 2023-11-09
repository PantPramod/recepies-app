"use client"
import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'

const PrintButton2 = () => {
    return (
        <button
            onClick={() => window.print()}
            className=' w-1/2 border border-[#186F65] text-[#186F65] hover:text-white  py-3 rounded-md uppercase text-sm font-semibold hover:bg-[#245e57] transition-all ease-in-out duration-300'>
            <span className=''>Print</span>
            <AiFillPrinter
                className='inline ml-2 '
                size={20}
            />
        </button>
    )
}

export default PrintButton2
