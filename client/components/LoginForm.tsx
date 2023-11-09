"use client"
import Link from 'next/link'
import React, { useState, SyntheticEvent } from 'react'
import Loader from './Loader'
import saveToken from '@/app/helper/saveToken'
import { ToastContainer, toast } from 'react-toastify'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { saveUserDataLocalStorage } from '@/app/helper/saveUserDataLocalStorage'
import { useRouter } from 'next/navigation'
import axios from '@/axios/axios'

const LoginForm = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [show, setShow] = useState({
        password: false,
        processing: false
    })

    const loginHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        const { email, password } = user
        try {
            setShow({ ...show, processing: true })
            const { data } = await axios.post('/user/login', {
                email,
                password,
            })
            console.log(data)
            toast.success("Logged In Successfully")
            saveUserDataLocalStorage({
                name: data?.name,
                email: data?.email,
                _id: data?._id
            })
            toast.success("Logged In Successfully")
            saveToken(data?.token)
            router.push('/')

        } catch (err) {
            console.log(err)
            toast.error("Something went wrong!")
        } finally {
            setShow({ ...show, processing: false })
        }
    }

    return (
        <div className='bg1 p-3 min-h-[calc(100vh-48px)] flex items-center justify-center w-full'>
            <ToastContainer toastStyle={{ backgroundColor: "white" }} />
            <style>
                {`
        .bg1{
            background-image: linear-gradient(to right, #00b09b, #96c93d);
        }
        `}
            </style>
            <form
                onSubmit={loginHandler}
                className=' w-[96%] sm:w-[50%] px-4 sm:px-10 py-10 rounded-2xl  shadow-xl  max-w-[400px] bg-white mx-auto text-sm'>
                <h2 className='text-2xl sm:text-3xl text-center uppercase'>Login Account</h2>

                <input
                    type='email'
                    placeholder='Email'
                    required
                    className='border border-gray-300 p-2 w-full mt-14 outline-none rounded-sm'
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email}
                />
                <div className='mt-10 border border-gray-300 flex items-center pr-2 rounded-sm'>
                    <input
                        type={show.password ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        className=' p-2 w-full  outline-none flex-1'
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        value={user.password}

                    />
                    <span className='pl-2 '>
                        {
                            !show.password ?
                                <AiFillEye
                                    onClick={() => setShow({ ...show, password: true })}
                                    cursor="pointer"

                                /> :
                                <AiFillEyeInvisible
                                    cursor="pointer"
                                    onClick={() => setShow({ ...show, password: false })}
                                />
                        }
                    </span>

                </div>



                <button
                    type='submit'
                    className='transition-all ease-in-out dyration-300 bg-blue-600 text-white px-8 py-2 mx-auto rounded-md mt-16 block hover:bg-blue-800 uppercase text-sm font-semibold'
                >
                    Login
                </button>
                <p className='mt-2 text-blue-600 hover:text-blue-800 hover:underline transition-all ease-in-out duration-300'>
                    <Link href="/register" >don't have an account. Click here to Register</Link>
                </p>
            </form>
            {
                show.processing && <Loader />
            }

        </div>
    )
}

export default LoginForm
