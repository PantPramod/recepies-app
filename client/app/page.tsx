import Card from '@/components/Card'
import ReactCarousel from '@/components/ReactCarousel'
import React, { useEffect } from 'react'


const Page = () => {
  return (
    <div className='bg-[#F0F9F9] min-h-screen max-w-screen overflow-x-hidden'>
      <ReactCarousel />
      <div className='flex bg-green-200 flex-wrap items-center justify-evenly w-full pt-10  gap-y-10 px-10'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Page
