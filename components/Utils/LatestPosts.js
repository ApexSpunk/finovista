import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function LatestPosts({ type }) {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            let limit = 3
            if (type === 'sidebar') {
                limit = 5
            }
            try {
                const res = await fetch(`/api/posts?limit=${limit}`)
                const posts = await res.json()
                setPosts(posts.posts)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchPosts()
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
                                <span>April 19, 2022</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default LatestPosts