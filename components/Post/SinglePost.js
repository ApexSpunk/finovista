import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SinglePostSkeleton from "./SinglePostSkeleton";
import { getPost } from "../../redux/post/actions";
import { useDispatch, useSelector } from "react-redux";

function SinglePost({ api, getData }) {
    const router = useRouter();
    const { post: { data, loading, error } } = useSelector(state => state.post);
    const dispatch = useDispatch();
    
    const fetchPosts = async () => {
        if (router.isReady) {
            const { slug } = router.query;
            dispatch(getPost(slug, api, getData));
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [router.isReady, router.query]);

    if(error){
        return <div className="error">{error}</div>
    }


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
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="eventTitle mt-8">
                        <h1>{data.title}</h1>
                        <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2">
                            <div className="w-12 h-[4px] bg-[#2067ff]"></div>
                        </div>
                    </div>
                    <div className="eventPost__content">
                        <div className="eventPost__content__left">
                            <div className="eventPost__content__left__top">
                                {data.content && Parser(data.content)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SinglePost;
