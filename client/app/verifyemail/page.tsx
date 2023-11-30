"use client"

import { useSearchParams } from 'next/navigation'
import axios from '@/axios/axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const [status, setStatus] = useState<string>('Wait...')

    useEffect(() => {
        const getData = async () => {
            try {
                 await axios.get('/user/verifyemail', {
                    params: { token }
                })
                setStatus("Verified")
                toast.success("Email Verified Successfully")
            } catch (err:any) {
                console.log("Error: ", err?.response?.data?.message)
                setStatus( err?.response?.data?.message)
                toast.error("Something went wrong")
            }
        }
        getData()
    }, [token])

    return (
        <div className='w-[80%] mx-auto'>
            <ToastContainer />
            <p className='text-2xl sm:text-3xl uppercase mt-10 text-center font-semibold'>Email Verification</p>
            <p className={` ${status!=="Verified"?"text-red-600 border-red-600":"text-green-600 border-red-600"} py-10 text-center border-dashed border border-black bg-gray-200 rounded-md mt-10 capitalize`}> {status}</p>
        </div>
    )
}

export default Page
