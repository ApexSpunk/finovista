import React from "react";
import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import BlogSkeleton from "./BlogSkeleton";


function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    setLoading(true);
    const getEvents = async () => {
      try {
        const cate = await fetch("/api/category");
        let cateRes = await cate.json();
        setCategories(cateRes.category);
        const response = await fetch("/api/posts");
        let ress = await response.json();
        setBlogs(ress.posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  return (
    <div>
      <div className="mb-32">
        <div className="text-center mt-12">
          <div>
            <h1 className="my-3">
              Recent <span className="text-[#2067ff]">Posts</span>
            </h1>
            <div className="w-44 h-[3px] bg-[#2067ff] mx-auto mb-12"></div>
          </div>
        </div>

        {loading ? (
          <div className="skeleton">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        ) : (
          <div className="allBlogs">
            {blogs.map((blog) => {
              let category = categories.find(
                (category) => category.category === blog.category
              );
              return (
                <SingleBlog
                  key={blog._id}
                  blog={blog}
                  categoryColor={category ? category.categoryColor : "#2067ff"}
                />
                
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
