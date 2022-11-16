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
                    <p className='text-3xl mt-4 font-semibold'>One Of The Fastest Way To Gain Business Success</p>
                    <p className='text-sm mt-8'>Finovista, is a Program Management Consulting, IN Country Partner, Technology Management & Capacity Building firm engaged extensively with Developmental Agencies, Government Bodies, Academia and Industry for Research Projects</p>
                    <div className='flex mt-8'>
                        <div className='h-16 w-2 bg-blue-700'></div>
                        <div className='ml-4'>
                            <p className='xl:text-xl lg:text-lg mt-1'>Helped Fund <span className='text-blue-700'>78,743</span> Projects in <span className='text-blue-700'>30</span> Countries, Benefiting Over <span className='text-blue-700'>7.6</span> Million People.</p>
                        </div>
                    </div>
                    <div className='flex mt-6 sm:hidden md:hidden lg:hidden xl:flex'>
                        <img src='https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2021/08/signn-1.png' alt="2" className="w-24" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs