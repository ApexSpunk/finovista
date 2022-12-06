import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/post/actions';

function LatestPosts({ type }) {
    const { route } = useRouter();
    const dispatch = useDispatch();
    const { posts: { data: posts, loading, error } } = useSelector(state => state.post)

    useEffect(() => {
        if (type === 'footer') {
            dispatch(getPosts("posts", "posts", 3, 1))
        } else {
            dispatch(getPosts("posts", "posts", 3, 1))
        }
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div className='latestPosts'>
            {
                posts.map((post, index) => (
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