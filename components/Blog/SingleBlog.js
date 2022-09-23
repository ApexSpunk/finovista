import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

function SingleBlog(props) {
  const { blog } = props;

  const handleClick = () => {
    Router.push(`/blog/${blog.slug}`);
  };
  return (
    <div onClick={handleClick}>
      <div>
        <img src={blog.thumbnail} alt="" />
        <div>
          <div className="flex justify-between content-center">
            <div
              className="blogCategory"
              style={{
                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              <p>{"category"}</p>
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
