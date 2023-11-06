import Card, { propTypes } from '@/components/Card'
import ReactCarousel from '@/components/ReactCarousel'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:4000/api/recipe', { next: { revalidate: 5 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
  const recipes = await getData()
  console.log(recipes)
  return (
    <div className='bg-[#F0F9F9] min-h-screen max-w-screen overflow-x-hidden'>
      <ReactCarousel />
      <div className='flex pb-10 flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>
        {
          recipes.map((recipe: any) => <Card recipe={recipe} />)
        }

      </div>
    </div>
  )
}

export default Page
