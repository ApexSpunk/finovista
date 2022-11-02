import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import IndustrySkeleton from './IndustrySkeleton';

function Industry() {
    const [industries, setIndustries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getIndustries = async () => {
            const res = await fetch('/api/industries');
            const data = await res.json();
            console.log(data, 'industries');
            setIndustries(data.Industries);
            setLoading(false);
        }
        getIndustries();
    }, []);
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-blue-700 mt-2'>\ Industry \</p>
                <p className='text-3xl mt-4 font-semibold'>Industries We Cater</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                    loading ? <>
                        <IndustrySkeleton />
                        <IndustrySkeleton />
                        <IndustrySkeleton />
                        <IndustrySkeleton />
                        <IndustrySkeleton />
                        <IndustrySkeleton />
                    </>:
                        industries.map((industry) => (
                            <Link href={`/industry/${industry.slug}`} key={industry.id}>
                            <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                                <img src={industry.thumbnail} alt='' className='w-full h-64 object-cover' />
                                <p className='text-xl font-semibold mt-4'>{industry.title}</p>
                            </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default Industry