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
import { FaHeart } from 'react-icons/fa'
import SavedRecipe from './SavedRecipe'
import { useAppDispatch, useAppSelector } from '@/app/Redux/hooks'
import { toogleFlag } from '@/app/Redux/Features/counterSlice'
import Image from 'next/image'
import axios from '@/axios/axios'



type propTypes = {
  access: string

}
const Header = ({ access }: propTypes) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSavedRecipe, setShowSavedRecipe] = useState(false)
  const [userId, setUserId] = useState('')
  const [name, setName] = useState('')
  const [allRecipes, setAllRecipes] = useState<any>([])

  const router = useRouter()
  const flag = useAppSelector((state) => state.counter.flag);
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (typeof window !== 'undefined') {
      setName(localStorage.getItem("name") ?? "");
      setUserId(localStorage.getItem("_id") ?? "");
    }
  }, [])

  const getData = async () => {
    try {
      const { data } = await axios.get(`/recipe/savedrecipe/${userId}`)
      console.log(data)
      setAllRecipes([...data])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    if (userId)
      getData()

  }, [userId, flag])

  const delRecipe = async (id: string) => {
    try {
      const { data } = await axios.delete(`/recipe/savedrecipe/${id}`)
      dispatch(toogleFlag())
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const logoutHandler = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setShowMenu(false)
    delToken();
  }

  return (
    <header className='sticky top-0 bg-white z-[9999] w-full flex   p-2 shadow-md max-w-screen items-center justify-between'>

      <Link href="/">
        <span
          className="cursor-pointer bg-[#B2533E] text-slate-100 px-2 rounded-md text-2xl font-bold uppercase font-serif">Food Receipies</span>
      </Link>

      <div className='flex items-center gap-x-4'>
        {access &&
          <>
            <FaHeart
              className='text-green-500 hover:text-green-700 hover:scale-110 transition-all ease-in-out duration-300'
              size={25}
              onClick={() => setShowSavedRecipe(prev => !prev)}
              cursor="pointer"
            />
            {
              <div className='w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer'>{name[0]}</div>
            }
          </>
        }

        <AiOutlineMenu
          className='ml-auto'
          size={25}
          cursor="pointer"
          onClick={() => setShowMenu(prev => !prev)}
        />
      </div>
      <div
        onClick={() => { setShowMenu(false); setShowSavedRecipe(false) }}
        className={`fixed left-0 right-0 top-0 bottom-0 bg-[#00000050] ${showMenu || showSavedRecipe ? "translate-x-0" : "translate-x-[100%]"} z-[999]`}>
      </div>
      <div className={` bg-[#186F65] text-[#B5CB99] w-[100%] sm:w-[400px] h-screen ml-auto fixed right-0 top-0 bottom-0   ${showMenu ? "translate-x-0" : "translate-x-[100%]"} transition-all ease-in-out duration-300 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-[9999]`}>
        <AiOutlineClose

          className='ml-auto mt-4 mr-4 hover:text-[#FCE09B] transition-all ease-in-out duration-300'
          size={25}
          cursor="pointer"
          onClick={() => setShowMenu(false)}
        />
        <ul className='px-10 uppercase text-xl font-semibold'>
          <li
            onClick={() => { router.push('/'); setShowMenu(false) }}
            className='py-4 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><AiFillHome className='inline-block mr-2' size={25} /> Home</li>
          <li
            onClick={() => { router.push('/recepies'); setShowMenu(false) }}
            className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
            <MdFastfood
              className="inline-block mr-2"
              size={25}
            />
            Receipes
          </li>
          <li className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><TbFileInfo className="inline-block mr-2" size={25} /> About</li>
          <li className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'><BiSolidContact className="inline-block mr-2" size={25} />Contact</li>

          {access ?
            <>
              <li
                onClick={() => { router.push('/savedrecipes'); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <FaRegHeart
                  className='inline mr-2'
                  size={25}
                />
                Saved Recipies
              </li>
              <li
                onClick={logoutHandler}
                className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
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
                className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
                <IoMdPersonAdd
                  className="inline-block mr-2"
                  size={25}
                />
                Register
              </li>
              <li
                onClick={() => { router.push('/login'); setShowMenu(false) }}
                className='py-4 mt-2 hover:text-[#FCE09B] hover:translate-x-1 transition-all ease-in-out duration-300 cursor-pointer'>
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

      {
        <div className={`overflow-y-auto px-4 bg-white w-[100%] sm:w-[400px] h-screen ml-auto fixed right-0 top-0 bottom-0   ${showSavedRecipe ? "translate-x-0" : "translate-x-[100%]"} transition-all ease-in-out duration-300 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] z-[9999]`}>
          <AiOutlineClose
            className='ml-auto mt-4 mr-4 hover:text-[#FCE09B] transition-all ease-in-out duration-300'
            size={25}
            cursor="pointer"
            onClick={() => setShowSavedRecipe(false)}
          />
          <p className='mt-5 font-bold uppercase text-center text-gray-500'>Saved Recipies</p>
          {
            allRecipes.length === 0 && <>

              <Image
                src="/empty.png"
                width={200}
                height={150}
                className='object-contain mt-5  mx-auto'
                alt=""
              />
              <p className='text-green-500 text-xl mt-4  text-center '>No Recipe Saved</p>
            </>
          }
          <div className='flex flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-2 sm:px-10'>
            {
              allRecipes.slice(0, 2).map((recipe: any) => <>
                <SavedRecipe
                  _id={recipe?._id}
                  author={recipe?.recipeId?.author}
                  description={recipe?.recipeId?.description}
                  rating={recipe?.recipeId?.rating}
                  thumbnail={recipe?.recipeId?.coverImage[0]}
                  title={recipe?.recipeId?.title}
                  totalTimeInMinutes={recipe?.recipeId?.prepTimeMinutes + recipe?.recipeId?.cookTimeMinutes}
                  isSlider
                  delRecipe={() => delRecipe(recipe?._id)}
                />

              </>

              )
            }
            {allRecipes.length > 0 && <Link href="/savedrecipes" className='w-full mb-10' onClick={() => setShowSavedRecipe(false)}>
              <p className='mt-5 uppercase font-bold text-center bg-green-500 py-2 rounded-md text-white w-full cursor-pointer'>Show More</p>
            </Link>}
          </div>

        </div>
      }

    </header>

  )
}

export default Header
