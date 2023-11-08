"use client"
import Loader from '@/components/Loader'
import Link from 'next/link'
import React, { useState, SyntheticEvent } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '@/axios/axios'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [show, setShow] = useState({
        password: false,
        cPassword: false,
        processing: false
    })

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault()
        const { name, email, password } = user
        try {
            setShow({ ...show, processing: true })
            const { data } = await axios.post('/api/user/register', {
                name,
                email,
                password,
                role: 'user',
                isVerified: false

            })
            console.log(data)
            toast.success("User registered. check your email to verify!")
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong!")
        } finally {
            setShow({ ...show, processing: false })
        }
    }

    return (
        <div className='bg1 p-3 min-h-[calc(100vh-48px)]'>
            <ToastContainer toastStyle={{ backgroundColor: "white" }} />
            <style>
                {`
                .bg1{
                    background-image: linear-gradient(to right, #00b09b, #96c93d);
                }
                `}
            </style>
            <form
                onSubmit={submitHandler}
                className=' w-[90%] sm:w-[50%] px-10 py-10 rounded-2xl shadow shadow-xl bg-gray-50     max-w-[400px] bg-white mx-auto text-sm'>
                <h2 className='text-3xl text-center uppercase'>Create Account</h2>
                <input
                    type='text'
                    placeholder='Name'
                    required
                    className='border border-gray-300 p-2 w-full mt-14 outline-none rounded-sm'
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    value={user.name}
                />
                <input
                    type='email'
                    placeholder='Email'
                    required
                    className='border border-gray-300 p-2 w-full mt-10 outline-none rounded-sm'
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
                    <span className='pl-2'>
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

                <div className='mt-10 border border-gray-300 flex items-center pr-2 rounded-sm'>
                    <input
                        type={show.cPassword ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        required
                        className=' p-2 w-full  outline-none flex-1'
                        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        value={user.confirmPassword}

                    />
                    <span className='pl-2'>
                        {
                            !show.cPassword ?
                                <AiFillEye
                                    onClick={() => setShow({ ...show, cPassword: true })}
                                    cursor="pointer"
                                /> :
                                <AiFillEyeInvisible
                                    cursor="pointer"
                                    onClick={() => setShow({ ...show, cPassword: false })}
                                />
                        }
                    </span>
                </div>

                <button
                    type='submit'
                    className='transition-all ease-in-out dyration-300 bg-blue-600 text-white px-8 py-2 mx-auto rounded-md mt-10 block hover:bg-blue-800 uppercase text-sm font-semibold'
                >
                    Register
                </button>
                <p className='mt-2 text-blue-600 hover:text-blue-800 hover:underline transition-all ease-in-out duration-300'>
                    <Link href="/login" >Already have an account. Click here to login</Link>
                </p>
            </form>
            {
                show.processing && <Loader />
            }

        </div>
    )
}

export default Register
