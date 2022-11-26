import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from '../components/Utils/Footer'
import Navbar from '../components/Utils/Navbar'
import GridSkeleton from '../components/Post/GridSkeleton'
import Link from 'next/link'


function Partner() {
    const [partners, setPartners] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);


    useEffect(() => {
        setLoading(true);
        fetch("/api/partners")
            .then((res) => res.json())
            .then((data) => {
                setPartners(data.partners);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    }, []);


    return (
        <div>
            <Head>
                <title>Partners | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <Navbar />
                <div className='mb-40'>
                    <div className='text-center mt-12'>
                        <p className='font-bold text-blue-700 mt-2'>\ Partners \</p>
                        <p className='text-3xl mt-4 font-semibold'>Our Partners</p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 my-10 mx-4 md:mx-32'>
                        {
                            loading ? <GridSkeleton /> :
                                partners.map((partner) => (
                                    <div key={partner.id}>
                                        <div className='transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                                            <img src={partner.logo} alt='' className="object-contain h-24 w-full" />
                                            <p className='text-xl text-center font-semibold mt-4'>{partner.name}</p>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Partner