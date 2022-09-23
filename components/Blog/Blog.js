import React from "react";
import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import BlogSkeleton from "./BlogSkeleton";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getEvents = async () => {
      try {
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
            {blogs.map((blog) => (
              <SingleBlog key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
