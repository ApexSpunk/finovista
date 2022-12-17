import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../components/Utils/Footer'
import Navbar from '../components/Utils/Navbar'

function newsmedia() {

    const [NewsMedia, setNewsMedia] = useState([]);
    const [loading, setLoading] = useState(true);


    const getNewsMedia = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/newsmedia");
            const data = await res.json();
            setNewsMedia(data.newsmedia);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getNewsMedia();
    }, []);


    return (
        <div>
            <Head>
                <title>News & Media | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <Navbar />
                <div>
                    <div>
                        <div className='mt-4'>
                            <div className='grid grid-cols-1 gap-10 text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                                <div className='grid-span-1'>
                                    <div className='text-center'>
                                        <p className='font-bold text-blue-700 mt-2'>\ News & Media \</p>
                                        <p className='text-3xl mt-4 font-semibold'>News & Media</p>
                                        <p className='text-sm mt-2 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>Here is all the latest news and updates from Finovista</p>
                                    </div>
                                    <div className='grid grid-cols-6 gap-6 mt-10 homeServices homeBlog'>
                                        {
                                            loading ? <div className='text-center'>Loading...</div> : NewsMedia.map((post, index) => (
                                                <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                    <a href={post.link} target='_blank' key={index} className='text-gray-700 no-underline'>
                                                        <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                            <div>
                                                                <img src={post.image} alt="3" className="w-full object-cover h-[200px] rounded-t-lg" />
                                                            </div>
                                                            <div className='p-6'>
                                                                <p className={'text-xs mt-[-10px] mb-2 font-semibold ' + (index === 0 ? 'text-blue-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-orange-400' : 'text-yellow-400')}>
                                                                    News Media
                                                                </p>
                                                                <h2 className='text-lg font-semibold'>{post.title.length > 50 ? post.title.substring(0, 52) + '...' : post.title}</h2>
                                                                {/* <p className='text-[13px] mt-2'>
                                                    {
                                                        post.content.length > 100 ? post.content.substring(0, 102) + '...' : post.content
                                                    }
                                                    </p> */}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default newsmedia