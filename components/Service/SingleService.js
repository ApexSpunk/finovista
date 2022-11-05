import React, { useState, useEffect } from "react";
import Router from "next/router";

function SingleProgram(props) {
  const { blog, categoryColor } = props;

  const handleClick = () => {
    Router.push(`/service/${blog.slug}`);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={blog.thumbnail} alt="" width='100%' />
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
          </div>
          <h4>{blog.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleProgram;
