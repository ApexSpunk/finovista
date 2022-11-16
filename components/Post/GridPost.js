import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import GridSkeleton from './GridSkeleton.js';

function GridPost({ type, api, item, link }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setLoading(true);
        const getPosts = async () => {
            try {
                const cate = await fetch("/api/category");
                let cateRes = await cate.json();
                setCategories(cateRes.category);
                const response = await fetch(`/api/${api}`);
                let ress = await response.json();
                console.log(ress);
                setPosts(ress[type]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getPosts();
    }, []);
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-blue-700 mt-2'>\ Industry \</p>
                <p className='text-3xl mt-4 font-semibold'>Industries We Cater</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                    loading ? <GridSkeleton /> :
                        posts.map((post) => (
                            <Link href={`/${link}/${post.slug}`} key={post.id}>
                                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                                    <img src={post.thumbnail} alt='' className="max-h-[220px] w-full object-cover" />
                                    <p className='text-xl font-semibold mt-4'>{post.title}</p>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    )
}

export default GridPost