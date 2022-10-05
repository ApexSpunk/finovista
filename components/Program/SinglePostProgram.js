import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SingleProgramSkeleton from "./SingleProgramSkeleton";
import SingleProgram from "./SingleProgram";

function SinglePostProgram(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const [eventSlug, setEventSlug] = useState(slug);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [programs, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    setLoading(true);
    const getEvents = async () => {
      try {
        const cate = await fetch("/api/category");
        let cateRes = await cate.json();
        setCategories(cateRes.category);
        const response = await fetch("/api/programs");
        let ress = await response.json();
        setPrograms(ress.programs);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
        const res = await fetch(`/api/singleProgram?slug=${slug}`);
        const data = await res.json();
        setEventSlug(data.programs[0].slug);
        setTitle(data.programs[0].title);
        setContent(data.programs[0].content);
        setThumbnail(data.programs[0].thumbnail);
        setLoading(false);
      } catch (err) {
        setError(true);
        console.log("hi");
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
          <SingleProgramSkeleton />
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
          {programs.map((program) => {
            let category = categories.find(
              (category) => category.category === program.category
            );
            return (
              <SingleProgram
                key={program._id}
                blog={program}
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

export default SinglePostProgram;
