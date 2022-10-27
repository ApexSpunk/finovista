import { Flex, Img, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



function Home() {

    const [images, setImages] = useState(1)
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let index = 2
        const interval = setInterval(() => {
            setImages(index)
            index++
            if (index === 10) {
                index = 1
            }
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/posts?limit=3`)
                const posts = await res.json()
                setPosts(posts.posts)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts()
    }, [])
    return (
        <div>
            <div className="w-full h-[600px]">
                <img src='./img/MECS 01.jpg' alt="hero" className="w-full h-full object-cover object-bottom" />
            </div>
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
            <div className='mt-20 bg-gray-300'>
                <Flex className='mx-3 md:mx-12 lg:mx-24 xl:mx-32 mt-20 py-12 justify-around'>
                    <Img src={`./logos/image${images}.png`} alt="1" className="h-20 max-w-[150px] animateLogo" />
                    <Spacer className='hidden md:block' />
                    <Img src={`./logos/image${images + 1}.png`} alt="1" className="h-20 max-w-[150px] animateLogo" />
                    <Spacer className='hidden md:block' />
                    <Img src={`./logos/image${images + 2}.png`} alt="1" className="h-20 max-w-[150px] animateLogo hidden md:block" />
                    <Spacer className='hidden lg:block' />
                    <Img src={`./logos/image${images + 3}.png`} alt="1" className="h-20 max-w-[150px] animateLogo hidden lg:block" />
                    <Spacer className='hidden lg:block' />
                    <Img src={`./logos/image${images + 4}.png`} alt="1" className="h-20 max-w-[150px] animateLogo hidden lg:block" />
                </Flex>
            </div>
            <div>
                <div className='mt-20'>
                    <div className='grid grid-cols-1 mx-3 md:mx-12 lg:mx-24 xl:mx-32 gap-10  text-gray-700 my-10'>
                        <div className='grid-span-1'>
                            <div className='text-center'>
                                <p className='font-bold text-blue-700 mt-2'>\ Our Services \</p>
                                <p className='text-3xl mt-4 font-semibold'>Services We Offer</p>
                            </div>
                            <div className='grid grid-cols-2 gap-6 mt-10 homeServices'>
                                <div className='col-span-2 md:col-span-1'>
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
                                <div className='col-span-2 md:col-span-1'>
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
                                <div className='col-span-2 md:col-span-1'>
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
                                <div className='col-span-2 md:col-span-1'>
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
            <div>
                <div className='mt-20'>
                    <div className='grid grid-cols-1 gap-10  text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                        <div className='grid-span-1'>
                            <div className='text-center'>
                                <p className='font-bold text-blue-700 mt-2'>\ Blog Post \</p>
                                <p className='text-3xl mt-4 font-semibold'>Something from our latest blog</p>
                                <p className='text-sm mt-2 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting or lipsum.</p>
                            </div>
                            <div className='grid grid-cols-6 gap-6 mt-10 homeServices homeBlog'>
                                {console.log(posts)}
                                {
                                    loading ? <div className='text-center'>Loading...</div> : posts.map((post, index) => (
                                        <Link href={`/blog/${post.slug}`} key={index}>
                                        <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                            <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                <div>
                                                    <img src={post.thumbnail} alt="3" className="w-full object-cover h-[200px] rounded-t-lg" />
                                                </div>
                                                <div className='p-6'>
                                                    <p className={'text-xs mt-[-10px] mb-2 font-semibold ' + (index === 0 ? 'text-blue-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-orange-400' : 'text-yellow-400')}>
                                                        {post.category}
                                                    </p>
                                                    <h2 className='text-xl font-semibold'>{post.title.length > 50 ? post.title.substring(0, 52) + '...' : post.title}</h2>
                                                    {/* <p className='text-[13px] mt-2'>
                                                    {
                                                        post.content.length > 100 ? post.content.substring(0, 102) + '...' : post.content
                                                    }
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home