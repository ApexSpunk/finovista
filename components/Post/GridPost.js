import Link from 'next/link';
import { useRouter } from 'next/router.js';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/post/actions.js';
import GridSkeleton from './GridSkeleton.js';

function GridPost({ type, api, link, getData }) {
    const [categories, setCategories] = useState([]);
    const { posts: { data, loading, error } } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const router = useRouter();
    const { route } = router.query;

    useEffect(() => {
        const getCategory = async () => {
            try {
                const cate = await fetch("/api/category");
                let cateRes = await cate.json();
                setCategories(cateRes.category);
            } catch (error) {
                console.log(error);
            }
        };
        getCategory();
        dispatch(getPosts(api, getData));
    }, [route]);
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-blue-700 mt-2'>\ {type.slice(0, 1).toUpperCase() + type.slice(1)} \</p>
                <p className='text-3xl mt-4 font-semibold'>{type.slice(0, 1).toUpperCase() + type.slice(1)} We Cater</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
                {
                    loading ? <GridSkeleton /> :
                        data.map((post) => (
                            <Link href={`/${link}/${post.slug}`} key={post._id}>
                                <div className='bg-gray-100 p-4 transition duration-500 ease-in-out transform hover:scale-105 rounded-xl cursor-pointer'>
                                    <img src={post.thumbnail} alt='' className="w-full object-cover" />
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