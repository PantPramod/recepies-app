"use client"
import { toogleFlag } from '@/app/Redux/Features/counterSlice';
import { useAppDispatch } from '@/app/Redux/hooks';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from '@/axios/axios';

type propTypes = {
    recipeId: string,

}

const SaveButton = ({ recipeId }: propTypes) => {
    const [userId, setUserId] = useState('')
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (typeof window !== 'undefined')
            setUserId(localStorage.getItem("_id") ?? "");
    }, [])

    const saveRecipe = async () => {
        try {
            // Send a POST request to the backend to save the recipe
            await axios.post('/recipe/save', {
                recipeId,
                userId
            });
            dispatch(toogleFlag())
            toast.success("Recipe saved successfully.")
            console.log('Recipe saved successfully.');
        } catch (error: any) {
            toast.error(error?.response?.data?.error)
            console.error('Error saving recipe:', error);
        }
    };
    return (
        <button
            onClick={saveRecipe}
            className='hover:underline bg-red-500 text-white px-6 py-4 text-sm rounded-sm font-bold'>
            Save
            <FaRegHeart
                className='inline ml-2'
                size={20}
            />
        </button>
    )
}

export default SaveButton
