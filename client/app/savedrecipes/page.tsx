"use client"

import SavedRecipe from '@/components/SavedRecipe'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/hooks'
import { ToastContainer, toast } from 'react-toastify'
import Image from 'next/image'
import axios from '@/axios/axios'
import 'react-toastify/dist/ReactToastify.css';
import { toogleFlag } from '../Redux/Features/counterSlice'



const Page = () => {
    const [userId, setUserId] = useState('')
    const [allRecipes, setAllRecipes] = useState<any>([])
    const flag = useAppSelector((state) => state.counter.flag);
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (typeof window !== 'undefined')
            setUserId(localStorage.getItem("_id") ?? "");
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
            getData()
            dispatch(toogleFlag())
            toast.success("deleted from saved list")
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    console.log("all", allRecipes)
    return (
        <>
            <ToastContainer />

            <div className='w-[80%] mx-auto'>
                <h2 className='text-3xl '>Saved Recipies</h2>
                {
                    allRecipes.length === 0 && <>
                        <Image
                            src="/empty.png"
                            width={200}
                            height={150}
                            className='object-contain mt-5 mx-auto w-[250px]'
                            alt=""
                        />
                        <p className='text-green-500 text-xl mt-4  text-center '>No Recipe Saved</p>
                    </>
                }
                <div className='flex flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>

                    {
                        allRecipes.map((recipe: any) => <>
                            <SavedRecipe
                                _id={recipe?._id}
                                author={recipe?.recipeId?.author}
                                description={recipe?.recipeId?.description}
                                rating={recipe?.recipeId?.rating}
                                thumbnail={recipe?.recipeId?.coverImage[0]}
                                title={recipe?.recipeId?.title}
                                totalTimeInMinutes={recipe?.recipeId?.prepTimeMinutes + recipe?.recipeId?.cookTimeMinutes}
                                delRecipe={() => delRecipe(recipe?._id)}
                            />
                        </>

                        )
                    }

                </div>

            </div>
        </>
    )
}

export default Page
