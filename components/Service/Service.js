import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ServiceSkeleton from './ServiceSkeleton';

function Service() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getServices = async () => {
            const res = await fetch('/api/services');
            const data = await res.json();
            setServices(data.services);
            setLoading(false);
        }
        getServices();
    }, []);
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-blue-700 mt-2'>\ Service \</p>
                <p className='text-3xl mt-4 font-semibold'>Services We Cater</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                    loading ? <>
                        <ServiceSkeleton />
                        <ServiceSkeleton />
                        <ServiceSkeleton />
                        <ServiceSkeleton />
                        <ServiceSkeleton />
                        <ServiceSkeleton />
                    </> :
                        services.map((service) => (
                            <Link href={`/service/${service.slug}`} key={service.id}>
                                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                                    <img src={service.thumbnail} alt='' className='w-full h-64 object-cover' />
                                    <p className='text-xl font-semibold mt-4'>{service.title}</p>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Service