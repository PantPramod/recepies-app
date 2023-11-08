import React from 'react'
import Star from './Star'
import { MdDeleteForever } from 'react-icons/md'

type propTypes = {
    _id: string,
    thumbnail: string,
    title: string,
    description: string,
    rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    author: string,
    totalTimeInMinutes: number,
    isSlider?: boolean,
    delRecipe: () => void
}
const SavedRecipe = ({ _id, isSlider, thumbnail, title, description, rating, author, totalTimeInMinutes, delRecipe }: propTypes) => {



    return (
        <div className='cursor-pointer  flex items-center gap-x-6 bg-gray-100 py-4 w-full rounded-md border-b-4 border-b-gray-300'>
            <img
                src={thumbnail}
                width={isSlider ? 50 : 200}
                height={isSlider ? 200 : 50}
            />
            <div className='self-start px-2'>
                <p className=''>{title}</p>
                <p className='mt-1 text-xs text-gray-400'>Total Time : <strong>{totalTimeInMinutes} Minutes</strong></p>
                <p className='mt-1 text-xs text-gray-400'>Author  : <strong>{author} </strong></p>

                <div className='mt-2 flex items-center'>
                    <Star rating={rating} />
                </div>
                {!isSlider &&
                    <p className='mt-2 text-sm'>{description}</p>
                }
            </div>

            <MdDeleteForever
                onClick={delRecipe}
                className="text-red-500 hover:scale-110 hover:text-red-600 transition-all ease-in-out duration-300"
                cursor="pointer"
                size={25}
            />
        </div>
    )
}

export default SavedRecipe
