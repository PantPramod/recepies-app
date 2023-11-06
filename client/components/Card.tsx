import React from 'react'
import { WiTime8 } from 'react-icons/wi'
import { BsFillStarFill } from 'react-icons/bs'
import Star from './Star'
import Link from 'next/link'

export type propTypes = {
    recipe: {
        _id: string,
        title: string,
        rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
        coverImage: string[],
        prepTimeMinutes: number,
        cookTimeMinutes: number
    }
}

const Card = ({ recipe }: propTypes) => {
    const { title, _id, cookTimeMinutes, coverImage, prepTimeMinutes, rating } = recipe
    return (
        <Link href={`/recepies/${_id}`}
            key={_id}
            className=' w-full sm:w-[47%] md:w-[30%] min-w-[250px]   bg-white hover:border-r-yellow-400 hover:border-b-yellow-400 hover:-translate-x-1 hover:-translate-y-1 border-4 transition-all ease-in-out duration-300 cursor-pointer '
        >
            <div
                className=' '>
                <img
                    src={coverImage[0]}
                    alt=""
                    className='object-cover w-full overflow-hidden  h-[200px]'
                    width={250}
                    height={200}
                />
                <div className='px-4 mt-4'>
                    <p className='text-[#CF6F0F] uppercase font-bold text-sm'>Healthy BreakFast</p>
                    <p className='text-xl mt-1 h-[50px]'>{title.toLowerCase()}</p>

                    <div className='flex items-center justify-between mt-10 pb-4 gap-x-4'>
                        <div className='flex items-center'>
                            <WiTime8
                                size={25}
                                className='text-blue-500'
                            />
                            <span className='text-sm ml-2 inline-block'>{cookTimeMinutes + prepTimeMinutes} mins</span>
                        </div>

                        <div className='flex items-center gap-x-1 '>
                            <Star rating={rating} />

                        </div>
                    </div>

                </div>
            </div>
        </Link>)
}

export default Card
