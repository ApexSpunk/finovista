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
        <img src={post.thumbnail} alt="" className="w-full object-cover" />
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
            {
              link === "blog" ? ( <p>{new Date(post.created).toDateString().substring(3, 15)}</p>) : null
            }
          </div>
          <h4>{post.title}</h4>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
