import React from "react";
import Router from "next/router";

function PostItem(props) {
  const { post, categoryColor, link } = props;

  const handleClick = () => {
    Router.push(`/${link}/${post.slug}`);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <img src={post.thumbnail} alt="" className="max-h-[220px] w-full object-cover" />
        <div>
          <div className="flex justify-between content-center">
            <div
              className="blogCategory"
              style={{
                backgroundColor: categoryColor,
              }}
            >
              <p>{post.category}</p>
            </div>
            <p>{new Date(post.created).toDateString()}</p>
          </div>
          <h4>{post.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
