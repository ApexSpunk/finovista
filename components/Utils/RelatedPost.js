import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/post/actions'

function RelatedPost({ api, type, link, getData }) {
    const { posts: { data, loading, error } } = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts(api, getData, 3))
    }, [])
    
    return (
        <div>
            <div className='mt-20'>
                <div className='grid grid-cols-1 gap-10  text-gray-700 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>
                    <div className='grid-span-1'>
                        <div className='text-center'>
                            <p className='font-bold text-blue-700 mt-2'>\ Related {type} \</p>
                            <p className='text-3xl mt-4 font-semibold'>Handpicked {type}</p>
                            <p className='text-sm mt-2 my-10 mx-3 md:mx-12 lg:mx-24 xl:mx-32'>Here are some of our handpicked {type} that you might be interested in.</p>
                        </div>
                        <div className='grid grid-cols-6 gap-6 mt-10 homeServices homeBlog'>
                            {
                                loading ? <div className='text-center'>Loading...</div> : data.map((post, index) => (
                                    <Link href={`/${link}/${post.slug}`} key={index}>
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
    )
}

export default RelatedPost
