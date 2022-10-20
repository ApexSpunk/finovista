import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Home() {
    return (
        <div>
            <div className="w-full h-[600px]">
                <img src='/img/banner.png' alt="hero" className="w-full h-full object-cover" />
            </div>
            <div>
                <div className='grid grid-cols-2 mx-52 gap-10 mt-32 text-gray-700'>
                    <div className='grid-span-1'>
                        <img src='https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2022/05/abt-us-new.jpg' alt="1" className="w-full rounded-2xl" />
                    </div>
                    <div className='grid-span-1'>
                        <p className='font-bold text-blue-700 mt-2'>\ About Us \</p>
                        <p className='text-3xl mt-4 font-semibold'>One Of The Fastest Way To Gain Business Success</p>
                        <p className='text-sm mt-8'>Finovista, is a Program Management Consulting, IN Country Partner, Technology Management & Capacity Building firm engaged extensively with Developmental Agencies, Government Bodies, Academia and Industry for Research Projects</p>
                        <div className='flex mt-8'>
                            <div className='h-16 w-2 bg-blue-700'></div>
                            <div className='ml-4'>
                                <p className='text-xl mt-1'>Helped Fund <span className='text-blue-700'>78,743</span> Projects in <span className='text-blue-700'>30</span> Countries, Benefiting Over <span className='text-blue-700'>7.6</span> Million People.</p>
                            </div>
                        </div>
                        <div className='flex mt-6'>
                            <img src='https://elementor.zozothemes.com/corpkit/wp-content/uploads/sites/45/2021/08/signn-1.png' alt="2" className="w-24" />
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className='mt-20'>
                    <div className='grid grid-cols-1 mx-32 gap-10  text-gray-700 my-10'>
                        <div className='grid-span-1'>
                            <div className='text-center'>
                                <p className='font-bold text-blue-700 mt-2'>\ Our Services \</p>
                                <p className='text-3xl mt-4 font-semibold'>Services We Offer</p>
                            </div>
                            <div className='grid grid-cols-2 gap-6 mt-10 homeServices'>
                                <div className='grid-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-26482,resizemode-1,msid-87959405/news/economy/indicators/business-optimism-in-india-at-near-8-year-high-report.jpg' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon2.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Business Consulting</p>
                                                <p className='text-sm'>Our holistic approach for the International agencies on research project for implementation of Indian components, translate into guaranteed success</p>
                                                <Link href='/services/business-consulting'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://s37564.pcdn.co/wp-content/uploads/2022/04/Setting-up-a-business-1568x1046.jpeg.optimal.jpeg' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon1.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Business Consulting</p>
                                                <p className='text-sm'>Our holistic approach for the International agencies on research project for implementation of Indian components, translate into guaranteed success</p>
                                                <Link href='/services/business-consulting'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon4.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Business Consulting</p>
                                                <p className='text-sm'>Our holistic approach for the International agencies on research project for implementation of Indian components, translate into guaranteed success</p>
                                                <Link href='/services/business-consulting'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://www.freshbooks.com/wp-content/uploads/how-long-does-it-take-business-to-be-successful.jpg' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon3.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Business Consulting</p>
                                                <p className='text-sm'>Our holistic approach for the International agencies on research project for implementation of Indian components, translate into guaranteed success</p>
                                                <Link href='/services/business-consulting'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home