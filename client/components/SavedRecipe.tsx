import React from 'react'
import Star from './Star'
import { MdDeleteForever } from 'react-icons/md'
import { useRouter } from 'next/navigation'

type propTypes = {
    _id: string,
    thumbnail: string,
    title: string,
    description: string,
    rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
    author: string,
    totalTimeInMinutes: number,
    isSlider?: boolean,
    delRecipe: () => void,
    isClickable?: boolean
}
const SavedRecipe = ({ _id, isSlider, thumbnail, title, description, rating, author, totalTimeInMinutes, delRecipe, isClickable }: propTypes) => {

    const router = useRouter()

    return (
        <div
            onClick={() => isClickable && router.push(`/recepies/${_id}`)}
            className='cursor-pointer  flex flex-wrap items-center gap-x-6 bg-gray-100 py-4 w-full rounded-md border-b-4 border-b-gray-300 relative'>
            <img
                src={thumbnail}
                width={isSlider ? 50 : 200}
                height={isSlider ? 200 : 50}
                className='w-full sm:w-1/2 max-w-[200px] mx-auto'
            />
            <div className='self-start px-2 flex-1'>

                <p className='mt-3 sm:mt-0'>{title}</p>
                <p className='mt-1 text-xs text-gray-400'>Total Time : <strong>{totalTimeInMinutes} Minutes</strong></p>
                <p className='mt-1 text-xs text-gray-400'>Author  : <strong>{author} </strong></p>

                <div className='mt-2 flex items-center'>
                    <Star rating={rating} />
                </div>
                {!isSlider &&
                    <p className='mt-2 text-sm'>{description}</p>
                }

                <MdDeleteForever
                    onClick={(e) => { e.stopPropagation(); delRecipe() }}
                    className="text-green-500 hover:scale-110 hover:text-green-600 transition-all ease-in-out duration-300 ml-auto block top-2 right-2 absolute "
                    cursor="pointer"
                    size={25}
                />
            </div>


        </div>
    )
}

export default SavedRecipe
