import Link from 'next/link'
import React, { useState } from 'react'

function Carousel() {
    const [image, setImage] = useState(1)
    console.log(image)
    return (
        <div id="default-carousel" class="relative" data-carousel="static">
            <div class="relative h-[300px] overflow-hidden rounded-lg md:h-[70vh]">
                <Link href={image !== 1 ? "/" : './events/exhibition-at-modern-energy-clean-cooking-forum-2022'}>
                    <div class="duration-700 ease-in-out" data-carousel-item>
                        <img src={`./homebanner${image}.jpeg`} class="absolute cursor-pointer block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </Link>
            </div>
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 border-0 bg-blue-300 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 border-0 bg-blue-300 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 border-0 bg-blue-300 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" class="absolute border-0 text-black bg-transparent top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span onClick={() => image > 1 ? setImage(image - 1) : setImage(2)} class="inline-flex hover:bg-white items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-opacity-50 bg-gray-100">
                    <svg aria-hidden="true" class="w-5 h-5 text-black sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </span>
            </button>
            <button type="button" class="absolute border-0 bg-transparent text-black top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span onClick={() => image >= 2 ? setImage(1) : setImage(image + 1)} class="inline-flex hover:bg-white items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-opacity-50 bg-gray-100">
                    <svg aria-hidden="true" class="w-5 h-5 text-black sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
            </button>
        </div>

    )
}

export default Carousel
