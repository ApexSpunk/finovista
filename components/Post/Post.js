import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
    const router = useRouter();
    const { route } = router.query;

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
    }, [route]);

    return (
        <div>
            <div className="mb-32">
                <div className="text-center mt-12">
                    <div>
                        <Text fontSize='34px' className="my-3 font-bold">
                            Recent <span className="text-[#2067ff]">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        </Text>
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
