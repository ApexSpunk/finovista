import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SingleServiceSkeleton from "./SingleServiceSkeleton";
import SingleService from "./SingleService";

function SinglePostService(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const [eventSlug, setEventSlug] = useState(slug);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    setLoading(true);
    const getEvents = async () => {
      try {
        const cate = await fetch("/api/category");
        let cateRes = await cate.json();
        setCategories(cateRes.category);
        const response = await fetch("/api/services");
        let ress = await response.json();
        setServices(ress.services);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    getEvents();
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            let category = categories.find(
              (category) => category.category === service.category
            );
            return (
              <SingleService
                key={service._id}
                blog={service}
                categoryColor={category ? category.categoryColor : "#2067ff"}
              />

            );
          })}
        </div>
      </>
      )}
    </>
  );
}

export default SinglePostService;
