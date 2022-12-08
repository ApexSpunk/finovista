import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestPosts } from '../../redux/post/actions';

function LatestPosts({ type }) {
    const router = useRouter();
    const { route, slug } = router.query;
    const dispatch = useDispatch();
    const { latestPosts: { data: posts, loading, error } } = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getLatestPosts("posts", "posts", 5))
    }, [dispatch])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='latestPosts'>
            {
                posts.slice(0, type === 'footer' ? 3 : 5).map((post, index) => (
                    <Link href={`/blog/${post.slug}`} key={index}>
                        <div className='cursor-pointer'>
                            <Image src={post.thumbnail} layout='fixed' width={80} height={50} />
                            <div>
                                <h4>{post.title.substring(0, 30)}...</h4>
                                <span>
                                    {(new Date(post.created).toDateString()).split(' ').slice(1).join(' ')}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default LatestPosts