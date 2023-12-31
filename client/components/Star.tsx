import React from 'react'
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai'
import { BiSolidStarHalf } from 'react-icons/bi'

type propTypes = {
    rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
}
const Star = ({ rating }: propTypes) => {
    if ([1, 2, 3, 4, 5].includes(rating))
        return (
            <>
                {rating && Array(rating).fill("a").map((item) => <AiTwotoneStar key={item} className='text-[#186F65]' size={25} />)}
                {rating && Array(5 - rating).fill("a").map((item) => <AiOutlineStar key={item} className='text-[#186F65]' size={25} />)}
            </>
        )
    else
        return (
            <>
                {rating && Array(Math.floor(rating)).fill("a").map((item) => <AiTwotoneStar key={item} className='text-[#186F65]' size={25} />)}
                <BiSolidStarHalf className='text-[#186F65]' size={25} />
                {rating && Array(5 - Math.ceil(rating)).fill("a").map((item) => <AiOutlineStar key={item} className='text-[#186F65]' size={25} />)}
            </>)
}

export default Star
