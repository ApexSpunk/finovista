import React from 'react'

function AboutUs() {
    return (
        <div>
            <div className='grid grid-cols-2  gap-10 mt-32 text-gray-700 mx-2 md:mx-20 lg:mx-32 xl:mx-52'>
                <div className='col-span-2 md:col-span-1 justify-center mx-8 md:mx-12 lg:mx-0 xl:mx-0'>
                    <img src='https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2022/05/abt-us-new.jpg' alt="1" className="w-full rounded-2xl" />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <p className='font-bold text-blue-700 mt-2'>\ About Us \</p>
                    {/* <p className='text-3xl mt-4 font-semibold'>One Of The Fastest Way To Gain Business Success</p> */}
                    <p className='text-md mt-8'>Finovista is a New Delhi-based Program Management Agency that operates as an In-country Representative and Capacity Building Programs viz Innovation Challenge, Entrepreneurship Development Program, Investor Pitching & Connect and Training. A sector agnostics consulting firm focuses on Clean Cooking, Energy, Environment, Low Carbon Growth Technology, Clean Energy, Green Finance, Result Based Finance, Carbon Finance and Social Enterprise Development. We work with the Government, International Agency, Development Agency, Academia and Corporate from India and across the Globe and Conceptualise, Design, Develop and Implement their Programs in India.</p>
                    <div className='flex mt-4'>
                        <div className='h-16 w-2 bg-blue-700'></div>
                        <div className='ml-8'> 
                            <p className='xl:text-xl lg:text-lg mt-1'>Over <span className='text-blue-700'>25</span> Programs executed and supported over  <span className='text-blue-700'>300</span> Startups & Entrepreneurs.</p>
                        </div>
                    </div>
                    {/* <div className='flex mt-6 sm:hidden md:hidden lg:hidden xl:flex'>
                        <img src='https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2021/08/signn-1.png' alt="2" className="w-24" />
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default AboutUs