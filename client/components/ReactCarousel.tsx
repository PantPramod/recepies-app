"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ReactCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}

        >
            <div className='relative'>
                <img
                    src="/banner.jpg"
                    className='object-cover max-h-[70vh] w-full '
                />
                <button className=' bg-blue-500 text-white px-4 py-2 rounded-md  absolute left-2/3 top-[80%] hover:bg-blue-700 transition-all ease-in-out duration-300 '>View Recepie</button>
            </div>
            <div>
                <img
                    src="/banner2.jpg"
                    className='object-cover max-h-[70vh] w-full '
                />

            </div>
            <div>
            <img
                    src="/banner3.jpg"
                    className='object-cover max-h-[70vh] w-full '
                />

            </div>
        </Carousel>
    )
}

export default ReactCarousel
