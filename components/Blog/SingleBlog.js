import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

function SingleBlog(props) {
  const { blog, categoryColor } = props;

  const handleClick = () => {
    Router.push(`/blog/${blog.slug}`);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={blog.thumbnail} alt="" className="max-h-[220px] w-full object-cover" />
        <div>
          <div className="flex justify-between content-center">
            <div
              className="blogCategory"
              style={{
                backgroundColor: categoryColor,
              }}
            >
              <p>{blog.category}</p>
            </div>
            <p>{new Date(blog.created).toDateString()}</p>
          </div>
          <h4>{blog.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
