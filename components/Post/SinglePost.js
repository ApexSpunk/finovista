import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SinglePostSkeleton from "./SinglePostSkeleton";

function SinglePost({ api, type }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [postData, setPostData] = useState({});
    const router = useRouter();

    const fetchPosts = async () => {
        setLoading(true);
        if (router.isReady) {
            const { slug } = router.query;
            if (!slug) return null;
            try {
                const res = await fetch(`/api/${api}?slug=${slug}`);
                const data = await res.json();
                setPostData(data[type][0]);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(true);
            }
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [router.isReady, router.query]);
    return (
        <>
            {loading ? (
                <div className="singleEventSkeleton">
                    <SinglePostSkeleton />
                </div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="eventPost">
                    <div className="programPost__banner">
                        <img src={postData.thumbnail} alt="" />
                    </div>
                    <div className="eventTitle mt-8">
                        <h1>{postData.title}</h1>
                        <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2">
                            <div className="w-12 h-[4px] bg-[#2067ff]"></div>
                        </div>
                    </div>
                    <div className="eventPost__content">
                        <div className="eventPost__content__left">
                            <div className="eventPost__content__left__top">
                                {postData.content && Parser(postData.content)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SinglePost;
