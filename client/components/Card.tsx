import React from 'react'
import { WiTime8 } from 'react-icons/wi'
import { BsFillStarFill } from 'react-icons/bs'

const Card = () => {
    return (
        <div className='w-full sm:w-[47%] md:w-[30%] min-w-[250px]   bg-white hover:border-r-yellow-400 hover:border-b-yellow-400 hover:-translate-x-1 hover:-translate-y-1 border-4 transition-all ease-in-out duration-300 cursor-pointer '>
            <img
                src="https://www.simplyrecipes.com/thmb/81UjC9ljMTHPewwA4QX1OKJFNxQ=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shakshuka-Feta-Olives-LEAD-6-f93bec449f724b3fbba07dbe6ecdfc56.jpg"
                alt=""
                className='w-full '
            />
            <div className='px-4 mt-4'>
                <p className='text-[#CF6F0F] uppercase font-bold'>Healthy BreakFast</p>
                <p className='text-2xl mt-1'>Shakshuka with Feta, Olives, and Peppers</p>

                <div className='flex items-center justify-between mt-10 pb-4 gap-x-4'>
                    <div className='flex items-center'>
                        <WiTime8
                            size={25}
                            className='text-blue-500'
                        />
                        <span className='text-sm ml-2 inline-block'>50 mins</span>
                    </div>

                    <div className='flex items-center gap-x-1 '>
                        <BsFillStarFill className='text-blue-500' size={23} />
                        <BsFillStarFill className='text-blue-500' size={23} />
                        <BsFillStarFill className='text-blue-500' size={23} />
                        <BsFillStarFill className='text-blue-500' size={23} />
                        <BsFillStarFill className='text-blue-500' size={23} />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card
