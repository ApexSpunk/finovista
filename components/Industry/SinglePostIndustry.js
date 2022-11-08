import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Parser from "html-react-parser";
import SingleIndustrySkeleton from "./SingleIndustrySkeleton";
import SingleIndustry from "./SingleIndustry";

function SinglePostIndustry(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const [industrySlug, setIndustrySlug] = useState(slug);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [industries, setIndustries] = useState([]);
  const [categories, setCategories] = useState([]);


  // useEffect(() => {
  //   setLoading(true);
  //   const getIndustries = async () => {
  //     try {
  //       const cate = await fetch("/api/category");
  //       let cateRes = await cate.json();
  //       setCategories(cateRes.category);
  //       const response = await fetch("/api/industries");
  //       let ress = await response.json();
  //       setIndustries(ress.industries);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(true);
  //     }
  //   };
  //   getIndustries();
  // }, []);

  const fetchIndustry = async () => {
    setLoading(true);
    if (router.isReady) {
      const { slug } = router.query;
      if (!slug) return null;
      try {
        const res = await fetch(`/api/singleIndustry?slug=${slug}`);
        const data = await res.json();
        setIndustrySlug(data.industries[0].slug);
        setTitle(data.industries[0].title);
        setContent(data.industries[0].content);
        setThumbnail(data.industries[0].thumbnail);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    fetchIndustry();
  }, [router.isReady]);

  return (
    <>
      {loading ? (
        <div className="singleEventSkeleton">
          <SingleIndustrySkeleton />
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
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((program) => {
            let category = categories.find(
              (category) => category.category === program.category
            );
            return (
              <SingleIndustry
                key={program._id}
                blog={program}
                categoryColor={category ? category.categoryColor : "#2067ff"}
              />

            );
          })}
        </div> */}
      </>
      )}
    </>
  );
}

export default SinglePostIndustry;
