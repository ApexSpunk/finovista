import { Flex, Img, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/post/actions'
import AboutUs from './AboutUs'
import Carousell from '../Utils/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousels from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Home() {

    const [images, setImages] = useState(1)
    const [talkseries, setTalkseries] = useState([])
    const [banner, setBanner] = useState([])
    const dispatch = useDispatch()
    const { posts: { data: posts, loading, error } } = useSelector(state => state.post)
    useEffect(() => {
        dispatch(getPosts("posts", "posts"))
    }, [])

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

    const fetchTalkSeries = async () => {
        const res = await fetch('/api/whatsnew')
        const data = await res.json()
        setTalkseries(data.whatsnew)
    }

    const fetchBanner = async () => {
        const res = await fetch('/api/banners')
        const data = await res.json()
        setBanner(data.banners)
        console.log(data.banners)
    }

    useEffect(() => {
        fetchTalkSeries()
        fetchBanner()
    }, [])





    return (
        <div>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} dynamicHeight stopOnHover={true} swipeAnimationHandler={true} showArrows={true}>
                {banner.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <div className="cursor-pointer">
                            <img src={item.logo} alt="hero" />
                        </div>
                    </Link>
                ))}
            </Carousel>
            {/* <div className="w-full h-[519px] cursor-pointer">
                    <img src='./homebanner.jpeg' alt="hero" className="w-full h-full object-cover object-bottom" />
                </div> */}
            <AboutUs />
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
                                        <img src='https://finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com/IN%20Country%20Representation.png' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon2.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>IN Country Representation</p>
                                                <p className='text-sm'>Our holistic approach for the International agencies on research project for implementation of Indian components, translate into guaranteed success. We jointly formulate pragmatic strategies and implementing the activities as per the Mandate..</p>
                                                <Link href='/service/in-country-representation'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com/Untitled%20%281200%20%C3%97%20630px%29%20%281%29.png' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon1.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Capacity Development</p>
                                                <p className='text-sm'>We provide Research and Analysis in Decision support for the Social and Development Project including Action, Monitoring, Evaluation and Learning (A-MEL).</p>
                                                <Link href='/service/capacity-development'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com/Technology%20Management.png' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon4.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Technology Management</p>
                                                <p className='text-sm'>Our Technology Management Group is a Global Technology Aggregator & Accelerator, engaged with innovation ecosystem with myriad stakeholders in various capacities helping them to leverage external sources of R&D and create value from intellectual property.</p>
                                                <Link href='/service/technology-management'>
                                                    <p className='text-blue-700 mt-2'>Read More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 md:col-span-1'>
                                    <div className='text-center rounded-lg overflow-hidden scroll-smooth h-72 servicesHover'>
                                        <img src='https://finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com/Untitled%20%281200%20%C3%97%20630px%29%20%282%29.png' alt="3" className="w-full object-cover h-[300px] rounded-t-lg" />
                                        <div className='px-6 mt-[-100px] cursor-pointer flex h-24 bg-red transition-all duration-500 ease-in-out transform  bg-white'>
                                            <div className='w-[40%] flex justify-center content-center'>
                                                <img src='https://demo.casethemes.net/consultio-agency/wp-content/uploads/2020/03/service-img-icon3.png' alt="3" className="w-12 my-auto transition-all duration-500 ease-in-out transform" />
                                            </div>
                                            <div>
                                                <p className='text-xl font-semibold mt-2'>Project Management Consultancy</p>
                                                <p className='text-sm'>We are full service Project Management Consultancy firm – we Conceptualize, Implement and Monitor.</p>
                                                <Link href='/service/programme-management-consultancy'>
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
                            <Carousels responsive={responsive}>
                                {
                                    loading ? <div className='text-center'>Loading...</div> : posts.map((post, index) => (
                                        <Link href={`/blog/${post.slug}`} key={index}>
                                            <div className='col-span-6 lg:col-span-3 m-2 rounded-md shadow-md xl:col-span-2'>
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
                            </Carousels>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20'>
                    <div className='grid grid-cols-1 gap-10  text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                        <div className='grid-span-1'>
                            <div className='text-center'>
                                <p className='font-bold text-blue-700 mt-2'>\ News & Media \</p>
                                <p className='text-3xl mt-4 font-semibold mb-12'>News & Media</p>
                            </div>
                            <Carousels responsive={responsive}>
                                {
                                    loading ? <div className='text-center'>Loading...</div> : talkseries.map((post, index) => (
                                        <Link href={post.link} key={index}>
                                            <div className='col-span-6 lg:col-span-3 xl:col-span-2 mx-2 cursor-pointer'>
                                                <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                    <div>
                                                        <img src={post.image} alt="3" className="w-full object-cover h-[200px] rounded-t-lg" />
                                                    </div>
                                                    <div className='p-6'>
                                                        <p className={'text-xs mt-[-10px] mb-2 font-semibold ' + (index === 0 ? 'text-blue-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-orange-400' : 'text-yellow-400')}>
                                                            {post.category}
                                                        </p>
                                                        <h2 className='text-xl font-semibold'>{post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</h2>
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
                            </Carousels>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home