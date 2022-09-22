import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function index() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all the events froma api

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("../../api/posts");
      const allPosts = await res.json();
      setPosts(allPosts.posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // delete an event

  const deletePost = async (id) => {
    try {
      const res = await fetch("../../api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Posts</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>
                    <a href={`/admin/blog/edit/${post.slug}`}>Edit</a>
                  </td>
                  <td>
                    <button onClick={() => deletePost(post._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default index;
