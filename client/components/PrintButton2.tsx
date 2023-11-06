"use client"
import React from 'react'
import { AiFillPrinter } from 'react-icons/ai'

const PrintButton2 = () => {
    return (
        <button
            onClick={() => window.print()}
            className=' w-1/2 border border-red-500 text-red-500 hover:text-white  py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-600'>
            <span className=''>Print</span>
            <AiFillPrinter
                className='inline ml-2 '
                size={20}
            />
        </button>
    )
}

export default PrintButton2
