import React from "react";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import PostSkeleton from "./PostSkeleton";


function Post({ type, api, item, link }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        setLoading(true);
        const getPosts = async () => {
            try {
                const cate = await fetch("/api/category");
                let cateRes = await cate.json();
                setCategories(cateRes.category);
                const response = await fetch(`/api/${api}`);
                let ress = await response.json();
                console.log(ress);
                setPosts(ress[type]);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            <div className="mb-32">
                <div className="text-center mt-12">
                    <div>
                        <h1 className="my-3">
                            Recent <span className="text-[#2067ff]">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        </h1>
                        <div className="w-44 h-[3px] bg-[#2067ff] mx-auto mb-12"></div>
                    </div>
                </div>

                {loading ? <PostSkeleton /> : (
                    <div className="allBlogs">
                        {posts.map((blog) => {
                            let category = categories.find(
                                (category) => category.category === blog.category
                            );
                            return (
                                <PostItem
                                    key={blog._id}
                                    post={blog}
                                    link={link}
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

export default Post;
