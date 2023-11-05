"use client"
import Card from '@/components/Card'
import SavedRecipe from '@/components/SavedRecipe'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Page = () => {
    const [userId, setUserId] = useState('')
    const [allRecipes, setAllRecipes] = useState<any>([])
    useEffect(() => {
        if (typeof window !== 'undefined')
            setUserId(localStorage.getItem("_id") ?? "");
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:4000/api/recipe/savedrecipe/${userId}`)
                console.log(data)
                setAllRecipes([...data])
            } catch (err) {
                console.log(err)
            }
        }
        if (userId)
            getData()
    }, [userId])

    console.log("all", allRecipes)
    return (
        <div className='w-[80%] mx-auto'>
            <h2 className='text-3xl '>Saved Recipies</h2>
            <div className='flex flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>
                {
                    allRecipes.map((recipe: any) => <>
                        <SavedRecipe
                            author={recipe?.recipeId?.author}
                            description={recipe?.recipeId?.description}
                            rating={recipe?.recipeId?.rating}
                            thumbnail={recipe?.recipeId?.coverImage[0]}
                            title={recipe?.recipeId?.title}
                            totalTimeInMinutes={recipe?.recipeId?.prepTimeMinutes + recipe?.recipeId?.cookTimeMinutes}
                        />
                        <SavedRecipe
                            author={recipe?.recipeId?.author}
                            description={recipe?.recipeId?.description}
                            rating={recipe?.recipeId?.rating}
                            thumbnail={recipe?.recipeId?.coverImage[0]}
                            title={recipe?.recipeId?.title}
                            totalTimeInMinutes={recipe?.recipeId?.prepTimeMinutes + recipe?.recipeId?.cookTimeMinutes}
                        />
                    </>

                    )
                }

            </div>

        </div>
    )
}

export default Page
