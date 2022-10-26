import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarAlt,
  faPlus,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SingleProgramSkeleton from "./SingleProgramSkeleton";

function SingleBlogPost(props) {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const [eventSlug, setEventSlug] = useState(slug);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const fetchPosts = async () => {
    console.log('first')
    setLoading(true);
    if (router.isReady) {
      const { slug } = router.query;
      if (!slug) return null;
      console.log(slug)
      try {
        const res = await fetch(`/api/singlePost?slug=${slug}`);
        const data = await res.json();
        setEventSlug(data.posts[0].slug);
        setTitle(data.posts[0].title);
        setContent(data.posts[0].content);
        setThumbnail(data.posts[0].thumbnail);
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
          <SingleProgramSkeleton />
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="eventPost">
          <div className="programPost__banner">
            <img src={thumbnail} alt="" />
          </div>
          <div className="eventTitle mt-8">
            <h1>{title}</h1>
            <div className="w-24 h-[4px] bg-gray-500 mb-8 mt-2">
              <div className="w-12 h-[4px] bg-[#2067ff]"></div>
            </div>
          </div>
          <div className="eventPost__content">
            <div className="eventPost__content__left">
              <div className="eventPost__content__left__top">
                {content && Parser(content)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleBlogPost;
