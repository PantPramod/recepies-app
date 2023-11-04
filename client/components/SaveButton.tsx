"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
type propTypes = {
    recipeId: string,

}
const SaveButton = ({ recipeId }: propTypes) => {
    const [userId, setUserId] = useState('')
    
    useEffect(() => {
        if (typeof window !== 'undefined')
            setUserId(localStorage.getItem("_id") ?? "");
    }, [])

    const saveRecipe = async () => {
        try {
            // Send a POST request to the backend to save the recipe
            await axios.post('http://localhost:4000/api/recipe/save', {
                recipeId,
                userId
            });
            console.log('Recipe saved successfully.');
        } catch (error) {
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
