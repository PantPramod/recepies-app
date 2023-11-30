import Card from '@/components/Card'
import ReactCarousel from '@/components/ReactCarousel'
import React from 'react'


async function getData() {
  const res = await fetch(`${process.env.BASE_URL}recipe`, { next: { revalidate: 5 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page = async () => {
  const recipes = await getData()
  return (
    <div className='bg-[#F0F9F9] min-h-screen max-w-screen overflow-x-hidden'>
      <ReactCarousel />
      <div className='flex pb-10 flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>
        {
          recipes.map((recipe: any) => <Card recipe={recipe} key={recipe._id} />)
        }
      </div>
    </div>
  )
}

export default Page
