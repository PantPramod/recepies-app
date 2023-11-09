"use client"

import { useSearchParams } from 'next/navigation'
import axios from '@/axios/axios';
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    useEffect(() => {

        const getData = async () => {
            try {
                const { data } = await axios.get('/user/verifyemail', {
                    params: { token }
                })
                console.log(data)
                toast.success("Email Verified Successfully")
            } catch (err) {
                console.log("Error: ", err)
                toast.error("Something went wrong")
            }
        }
        getData()
    }, [token])

    return (
        <div>
            <ToastContainer />
            <p>Verify Email</p>
        </div>
    )
}

export default Page
