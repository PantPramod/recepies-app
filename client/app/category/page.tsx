import RoundedCard from '@/components/RoundedCard'
import React from 'react'
import wordToImage from '../helper/wordToImage'
async function getData() {
    const res = await fetch(`${process.env.BASE_URL}recipe/category`, { next: { revalidate: 5 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async () => {
    const categories = await getData();

    return (<div className='flex flex-wrap items-center gap-y-6 sm:gap-x-[3.5%] md:gap-x-[4%] mt-10'>
        {
            categories.map((category: string) => <div key={category} className=' w-full sm:w-[30%] md:w-[22%]  min-w-[200px]'>
                <RoundedCard imgSrc={wordToImage(category)}
                 category={category} />
                <p className='text-center uppercase'>{category}</p>
            </div>)
        }

    </div>
    )
}

export default Page


