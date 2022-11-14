import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SingleServiceSkeleton from "./SingleServiceSkeleton";


function SinglePostService(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const [eventSlug, setEventSlug] = useState(slug);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  


  

  const fetchEvent = async () => {
    setLoading(true);
    if (router.isReady) {
      const { slug } = router.query;
      if (!slug) return null;
      try {
        const res = await fetch(`/api/singleService?slug=${slug}`);
        const data = await res.json();
        setEventSlug(data.services[0].slug);
        setTitle(data.services[0].title);
        setContent(data.services[0].content);
        setThumbnail(data.services[0].thumbnail);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [router.isReady]);

  return (
    <>
      {loading ? (
        <div className="singleEventSkeleton">
          <SingleServiceSkeleton />
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (<>
        <div className="eventPost">
          <div className="programPost__banner">
            <img src={thumbnail} alt="" className="max-h-[500px] w-full object-cover" />
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
        
      </>
      )}
    </>
  );
}

export default SinglePostService;
