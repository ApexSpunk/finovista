import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../admin/Navbar";
import Topbar from "../admin/Topbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../../redux/post/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { DELETE_POST_RESET } from "../../redux/post/actionTypes";

function Post({ api, getData, type, link }) {

    const { data: session, status } = useSession()
    const { deletePost: { loading, error, success } } = useSelector(state => state.post)
    const { posts: { data: posts, loading: postsLoading, error: postsError } } = useSelector(state => state.post)
    const [page, setPage] = useState(1)
    const router = useRouter()
    const { route } = router.query

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts(api, getData, 10, page))
    }, [page, route])

    useEffect(() => {
        if (success) {
            dispatch(getPosts(api, getData, 10, page))
            toast.success("Post deleted successfully");
            dispatch({ type: DELETE_POST_RESET })
        }
    }, [success]);



    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        return <p>Access Denied</p>
    }

    return (
        <div>
            <Head>
                <title>Finovista Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <div className="flex items-start justify-between">
                    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                            <div className="flex items-center justify-center pt-6">
                                <img src="/img/finovista.png" alt="" className="w-40" />
                            </div>
                            <Navbar />
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <Topbar />
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid ">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <div className="grid">
                                                {/* <Home /> */}
                                                <div className="flex items-center justify-between titleContent">
                                                    <h1>All {type}</h1>
                                                    <div className="flex items-center gap-4">
                                                        <Link href="/admin/category">
                                                            Category
                                                        </Link>
                                                        <Link href={`./${route}/add`}>Add</Link>
                                                    </div>
                                                </div>
                                                {postsLoading ? (
                                                    <h3>Loading...</h3>
                                                ) : (
                                                    <table className="table-auto w-full mt-4 border-collapse contentTable">
                                                        <thead className="bg-gray-100 dark:bg-gray-700">
                                                            <tr className="text-left">
                                                                <th className="px-4 py-2">Name</th>
                                                                <th className="px-4 py-2 text-center w-[90px]">
                                                                    Actions
                                                                </th>
                                                                <th className="px-4 py-2 text-center w-[150px]">
                                                                    Delete
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-gray-700 dark:text-gray-200">
                                                            {posts.map((post) => (
                                                                <tr key={post._id}>
                                                                    <td className="border px-4 py-2 text-blue-400 font-[500] cursor-pointer">
                                                                        <Link href={`../${link}/${post.slug}`}>
                                                                            {post.title}
                                                                        </Link>
                                                                    </td>
                                                                    <td className="px-4 py-2 tableLink flex w-[90px] gap-4 grid-cols-2 align-middle">
                                                                        <Link href={`../${link}/${post.slug}`}>
                                                                            <FontAwesomeIcon
                                                                                icon={faEye}
                                                                                height="20px"
                                                                                className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                                                            />
                                                                        </Link>
                                                                        <Link
                                                                            href={`/admin/${route}/edit/${post.slug}`}
                                                                        >
                                                                            <FontAwesomeIcon
                                                                                icon={faEdit}
                                                                                height="20px"
                                                                                className="cursor-pointer hover:text-blue-600 transform hover:scale-110"
                                                                            />
                                                                        </Link>
                                                                    </td>
                                                                    <td className="px-4 py-2 text-center">
                                                                        <button
                                                                            onClick={() => confirm("Are you sure?") && dispatch(deletePost(api, post._id))}
                                                                            className="px-4 py-[4px] bg-red-500 text-white rounded-md border-none cursor-pointer m-auto text-[16px]"
                                                                        >
                                                                            Delete
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                                <div className="flex items-center justify-center mt-4">
                                                    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">
                                                        Prev
                                                    </button>
                                                    <p className="text-center w-12 h-2">{page}</p>
                                                    <button onClick={() => setPage(page + 1)} className="bg-blue-500 text-white px-4 py-2 border-none rounded-md mt-4">Next</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Post;
