'use client'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { MdFastfood } from 'react-icons/md'
import { TbFileInfo } from 'react-icons/tb'
import { BiSolidContact, BiLogInCircle } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { IoMdPersonAdd } from 'react-icons/io'
import Link from 'next/link'
import delToken from '@/app/helper/delToken'
import { FaRegHeart } from 'react-icons/fa'


type propTypes = {
  access: string

}
const Header = ({ access }: propTypes) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()
  const [name, setName] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined')
      setName(localStorage.getItem("name") ?? "");

  }, [])
  return (
    <header className='z-[9999] w-full flex   p-2 shadow-md max-w-screen items-center justify-between'>

      <Link href="/">
        <span
          className="cursor-pointer bg-red-500 text-slate-100 px-2 rounded-md text-2xl font-bold uppercase font-serif">Food Receipies</span>
      </Link>
      <div className='flex items-center gap-x-4'>
        {access && <div className='w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer'>{name[0]}</div>}
        <AiOutlineMenu
          className='ml-auto'
          size={25}
          cursor="pointer"
          onClick={() => setShowMenu(prev => !prev)}
        />
      </div>
      <div
        onClick={() => setShowMenu(false)}
        className={`fixed left-0 right-0 top-0 bottom-0 bg-[#00000050] ${showMenu ? "translate-x-0" : "translate-x-[100%]"} z-[999]`}>
      </div>
      <div className={`bg-white w-[100%] sm:w-[400px] h-screen ml-auto fixed right-0 top-0 bottom-0   ${showMenu ? "translate-x-0" : "translate-x-[100%]"} transition-all ease-in-out duration-300 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-[9999]`}>
        <AiOutlineClose

          className='ml-auto mt-4 mr-4 hover:text-blue-700 transition-all ease-in-out duration-300'
          size={25}
          cursor="pointer"
          onClick={() => setShowMenu(false)}
        />
        <ul className='px-10 uppercase text-xl font-semibold'>
          <li
            onClick={() => { router.push('/'); setShowMenu(false) }}
            className='py-4 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><AiFillHome className='inline-block mr-2' size={25} /> Home</li>
          <li
            onClick={() => { router.push('/recepies'); setShowMenu(false) }}
            className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
            <MdFastfood
              className="inline-block mr-2"
              size={25}
            />
            Receipes
          </li>
          <li className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><TbFileInfo className="inline-block mr-2" size={25} /> About</li>
          <li className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><BiSolidContact className="inline-block mr-2" size={25} />Contact</li>

          {access ?
            <>
              <li
                onClick={() => { router.push('savedrecipes'); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <FaRegHeart
                  className='inline mr-2'
                  size={25}
                />
                Saved Recipies
              </li>
              <li
                onClick={() => { delToken(); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <BiLogInCircle
                  className="inline-block mr-2"
                  size={25}
                />
                Logout
              </li>
            </>
            :
            <>

              <li
                onClick={() => { router.push('/register'); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <IoMdPersonAdd
                  className="inline-block mr-2"
                  size={25}
                />
                Register
              </li>
              <li
                onClick={() => { router.push('/login'); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-blue-700 hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <BiLogInCircle
                  className="inline-block mr-2"
                  size={25}
                />
                Login
              </li>
            </>

          }


        </ul>
      </div>

    </header>

  )
}

export default Header
