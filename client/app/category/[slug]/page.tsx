import Card from '@/components/Card'
import baseUrl from '@/config/baseUrl'
import React from 'react'
async function getData(cat: string) {
    const res = await fetch(`${baseUrl}recipe/category/${cat}`, { next: { revalidate: 5 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async ({ params }: { params: { slug: string } }) => {
    const recipes = await getData(params.slug)
    return (
        <div>
            <div className='flex pb-10 flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>
                {
                    recipes.map((recipe: any) => <Card recipe={recipe} key={recipe._id} />)
                }

            </div>
        </div>
    )
}

export default Page
