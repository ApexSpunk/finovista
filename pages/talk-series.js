import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../components/Utils/Footer'
import Navbar from '../components/Utils/Navbar'

function talkSeries() {

    const [impact, setImpact] = useState([]);
    const [loading, setLoading] = useState(true);


    const getImpact = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/talkseries");
            const data = await res.json();
            setImpact(data.talkseries);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getImpact();
    }, []);


    return (
        <div>
            <Head>
                <title>Talk Series | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <Navbar />
                <div>
                    <div>
                        <img src="./Main.jpeg" alt="talk-series" className="w-full object-cover object-top h-[450px]" />

                        <div className='mt-4'>
                            <div className='grid grid-cols-1 gap-10  text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                                <div className='grid-span-1'>
                                    <div className='mt-[-30px]'>
                                        <p className='font-bold text-center text-blue-700 mt-2'>\ Talk Series \</p>
                                        <p className='text-3xl text-center mt-4 font-semibold'>Talk Series</p>
                                        <div className='p-4 shadow-md rounded-lg bg-white'>
                                            <p className='text-sm'>MECS Programme is a UK Aid (FCDO) funded global research programme, led by Loughborough University and the World Bank’s Energy Sector Management Assistance Program (ESMAP). By integrating modern energy cooking services into the planning for electricity access, quality, reliability, and sustainability, MECS hopes to leverage investment in renewable energies (both grid and off-grid) to address the clean cooking challenge. MECS is implementing a strategy focused on including the cooking needs of households in the investment and action on ‘access to affordable, reliable, sustainable modern energy for all’. In seeking to spark a new approach to clean cooking, the programme researches the socio-economic realities of a transition from polluting fuels to a range of modern fuels and is open to other research and approaches that include other fuels such as ethanol, bioLPG, or hydrogen. Whilst the research covers several clean fuels, the evidence is pointing to the viability, cost-effectiveness, and user satisfaction that energy-efficient electric cooking devices provide.</p>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-6 gap-6 mt-10 homeServices homeBlog'>
                                        {
                                            loading ? <div className='text-center'>Loading...</div> : impact.map((post, index) => (
                                                <Link href={`https://finovista.com/${post.link}`} key={index}>
                                                    <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                        <div className='col-span-6 lg:col-span-3 xl:col-span-2'>
                                                            <div>
                                                                <img src={post.image} alt="3" className="w-full object-cover h-[200px] rounded-t-lg" />
                                                            </div>
                                                            <div className='p-6'>
                                                                <p className={'text-xs mt-[-10px] mb-2 font-semibold ' + (index === 0 ? 'text-blue-400' : index === 1 ? 'text-green-400' : index === 2 ? 'text-orange-400' : 'text-yellow-400')}>
                                                                    {post.category}
                                                                </p>
                                                                <h2 className='text-lg font-semibold'>{post.title.length > 50 ? post.title.substring(0, 52) + '...' : post.title}</h2>
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
                <Footer />
            </div>
        </div>
    )
}

export default talkSeries