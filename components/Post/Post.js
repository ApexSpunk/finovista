import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/actions";
import PostItem from "./PostItem";
import PostSkeleton from "./PostSkeleton";


function Post({ type, api, link, getData }) {
    const [categories, setCategories] = useState([]);
    const { posts: { data, loading, error } } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const cate = await fetch("/api/category");
                let cateRes = await cate.json();
                setCategories(cateRes.category);
            } catch (error) {
                console.log(error);
            }
        };
        getCategory();
        dispatch(getPosts(api, getData));
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
                        {data.map((blog) => {
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
