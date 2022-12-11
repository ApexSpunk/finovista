import Head from "next/head";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddMedia from "../Media/AddMedia";
const ReactDOMServer = require("react-dom/server");
const HtmlToReactParser = require("html-to-react").Parser;
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import EditorConfig from "./config";
import slugify from "slugify";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPost } from "../../redux/post/actions";
import { updatePost as update } from "../../redux/post/actions";
import { CREATE_POST_RESET, UPDATE_POST_RESET } from "../../redux/post/actionTypes";
const htmlToReactParser = new HtmlToReactParser();
const importJodit = () => import("jodit-react");
const toastConfig = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
const JoditEditor = dynamic(importJodit, {
    ssr: false,
});

function Editor({ api, getData, type, method, link }) {

    const router = useRouter();
    const editor = null;
    const dispatch = useDispatch();
    const { createPost: { loading, error, success } } = useSelector(state => state.post);
    const { updatePost: { loading: updateLoading, error: updateError, success: updateSuccess } } = useSelector(state => state.post);
    const { post: { data: post, loading: postLoading, error: postError } } = useSelector(state => state.post);
    const { route } = router.query;

    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const [editorData, setEditorData] = useState({
        id: "",
        thumbnail: "https://finovista-storage-5a9947e584608-staging.s3.us-west-2.amazonaws.com/admin-ajax.png",
        title: "",
        content: "",
        slug: "",
        category: "",
    });
    const [whatsNew, setWhatsNew] = useState({ _id: "", title: "", link: "", image: "" });


    function parseContent(content) {
        const reactElement = htmlToReactParser.parse(content);
        const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
        return reactHtml;
    }
    const fetchCategories = async () => {
        const res = await fetch('/api/category');
        const categories = await res.json();
        setCategories(categories.category);
    };

    const uploadThumbnail = (event) => {
        if (event.target.files && event.target.files) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const uploadToServer = async (event) => {
        toast.info("Uploading Image To The Server", toastConfig);
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/imageUpload", {
            method: "POST",
            body,
        });
        let ress = await response.json();
        if (ress.success) {
            setEditorData({ ...editorData, thumbnail: ress.data.Location });
            toast.success("Image uploaded successfully", toastConfig);
        } else {
            toast.error("Image upload failed", toastConfig);
        }
    };

    const fetchWhatsNew = async () => {
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            const res = await fetch('/api/singleWhatsnew?slug=' + link + "/" + id);
            const whatsNew = await res.json();
            whatsNew.whatsnew.length > 0 ? setWhatsNew(whatsNew.whatsnew[0]) : setWhatsNew({ _id: "", title: "", link: "", image: "" });
        }
    };

    const addWhatsNew = async () => {
        const res = await fetch('/api/whatsnew', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: editorData.title,
                link: link + "/" + editorData.slug,
                image: editorData.thumbnail,
                created: Date.now(),
                category: link,
            }),
        });
        const whatsNew = await res.json();
        setWhatsNew(whatsNew.whatsnew);
        toast.success("Whats New Added Successfully", toastConfig);
    };

    const removeWhatsNew = async (id) => {
        const res = await fetch('/api/whatsnew', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        setWhatsNew({ _id: "", title: "", link: "", image: "" });
        toast.warning("Whats New Removed Successfully", toastConfig);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    function handleTitleInput(postTitle) {
        const slug = slugify(postTitle, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false,
            locale: 'vi'
        })
        setEditorData({ ...editorData, title: postTitle, slug: slug });
    }

    const fetchPost = async () => {
        if (router.isReady) {
            const { id } = router.query;
            if (!id) return null;
            dispatch(getPost(id, api, getData));
        }
    };

    if (method === "edit") {
        useEffect(() => {
            fetchPost();
            fetchWhatsNew();
        }, [router.isReady && router.query.id]);
        useEffect(() => {
            if (!postLoading && post) {
                setEditorData({ ...editorData, id: post._id, title: post.title, content: post.content, thumbnail: post.thumbnail, category: post.category, slug: post.slug });
            } else {
                setEditorData({ ...editorData, id: "", title: "", content: "", thumbnail: "", category: "", slug: "" });
            }
        }, [postLoading]);
    }


    async function updatePost() {
        editorData.content = parseContent(editorData.content);
        dispatch(update(api, editorData));
    }

    async function publishPost() {
        editorData.content = parseContent(editorData.content);
        dispatch(createPost(api, editorData));
    }

    useEffect(() => {
        if (success && method !== "edit") {
            toast.success(`${type} ${editorData.title} Published`, toastConfig);
            dispatch({ type: CREATE_POST_RESET })
            setTimeout(() => {
                router.push(`/admin/${route}/edit/` + editorData.slug);
            }, 2000);
        }
        if (error && method !== "edit") {
            dispatch({ type: CREATE_POST_RESET })
            toast.error(`Slug Already Exist Please Check The URL`, toastConfig);
        }
        if (updateSuccess && method === "edit") {
            dispatch({ type: UPDATE_POST_RESET })
            toast.success(`${type} Successfully Updated`, toastConfig);
        }
        if (updateError && method === "edit") {
            dispatch({ type: UPDATE_POST_RESET })
            toast.error(`Slug Already Exist Please Check The URL`, toastConfig);
        }

    }, [success, error || updateError, updateSuccess]);

    return (
        <div>
            <div className="bg-[#f8f9fb]">
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                </Head>
                <div className="bg-gray-100">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <div className="grid grid-cols-12 gap-6 font-[Poppins] pt-8 w-[95%] mx-auto">
                        <div className="col-span-9">
                            <div>
                                <input
                                    type="text"
                                    className="font-[Poppins] w-full p-2 rounded-lg border text-xl box-border"
                                    placeholder="Post Title"
                                    value={editorData.title}
                                    onBlur={(cou) => {
                                        handleTitleInput(cou.target.value);
                                    }}
                                    name="title"
                                    onChange={(cou) => setEditorData({ ...editorData, title: cou.target.value })}
                                // value={editorData.title}
                                />
                                <div className="flex justify-between">
                                    <h4 className="font-[500] my-5">
                                        Permalink: &nbsp;<a href="#">{editorData.slug}</a>
                                    </h4>
                                    <button onClick={() => setShowModal(!showModal)} className="bg-blue-500 border cursor-pointer border-[#e9ecef] border-none rounded-lg my-4 px-4 py-2 font-[500] text-white">Add Media</button>
                                </div>
                            </div>
                            <JoditEditor
                                ref={editor}
                                value={editorData.content}
                                tabIndex={500}
                                config={EditorConfig}
                                onBlur={(newContent) => {
                                    setEditorData({ ...editorData, content: newContent });
                                }}
                                onChange={(newContent) => { }}
                            />
                        </div>
                        <div className="col-span-3">
                            <div className="bg-white p-4 rounded-xl">
                                <div>
                                    <h4>Publish</h4>
                                    <hr />
                                </div>
                                <div className="grid mt-4 text-center">
                                    <p className="py-2">status: {method == "edit" ? "Draft" : "Published"}</p>
                                    {method == "edit" ? <p className="py-2">visibility: Public</p> : null}
                                    <button className="previewBtn" onClick={method == "edit" ? updatePost : publishPost}>
                                        {method == "edit" ? "Update" : "Publish"} {type}
                                    </button>
                                    <Link href={`/admin/${route}`}>
                                        <button className="redBtn mt-4">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white p-4 mt-4 rounded-xl">
                                <div>
                                    <h4>{type} Category</h4>
                                    <div>
                                        <select
                                            name=""
                                            id=""
                                            onChange={(loc) => { setEditorData({ ...editorData, category: loc.target.value }); }}
                                            className="p-2 rounded-md border border-gray-300 w-full bg-transparent text-lg mt-3"
                                            value={editorData.category}
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map((cat, index) => {
                                                return (
                                                    <option value={cat.category} key={index}>{cat.category}</option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {
                                method == "edit" ? <div className="bg-white p-4 mt-4 rounded-xl">
                                    <div>
                                        <h4>Whats New</h4>
                                        <div>
                                            {
                                                whatsNew._id == "" ? (
                                                    <Button onClick={
                                                        () => {
                                                            addWhatsNew();
                                                        }
                                                    } className="bg-blue-500 w-full order cursor-pointer border-[#e9ecef] border-none rounded-lg my-4 px-4 py-3 font-[500] text-white">Add</Button>
                                                ) : (
                                                    <Button onClick={() => {
                                                        removeWhatsNew(whatsNew._id);
                                                    }} className="bg-red-500 w-full border cursor-pointer border-[#e9ecef] border-none rounded-lg my-4 px-4 py-3 font-[500] text-white">Remove</Button>

                                                )
                                            }
                                        </div>
                                    </div>
                                </div> : null
                            }
                            <div className="bg-white p-4 mt-4 rounded-xl">
                                <div>
                                    <h4>Add Thumbnail</h4>
                                    <div>
                                        <img src={editorData.thumbnail} alt="" className="w-full max-h-44 object-cover" />
                                        <input
                                            name="myImage"
                                            onChange={uploadThumbnail}
                                            className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl my-2 text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full"
                                            type="file"
                                            accept="image/*"
                                        />
                                        <button
                                            className=" border-0 rounded-3xl uppercase text-md bg-blue-700 text-white font-semibold cursor-pointer my-2 w-full p-3"
                                            type="submit"
                                            onClick={uploadToServer}
                                        >
                                            Upload Image
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddMedia handleClick={() => setShowModal(!showModal)} showModal={showModal} />
        </div>
    );
}

Editor.auth = { role: "admin" }

export default Editor;
