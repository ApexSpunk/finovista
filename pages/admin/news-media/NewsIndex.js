import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewsIndex() {

    const [newsmedias, setNewsMedias] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modal, setModal] = React.useState(false);
    const [unewsmedia, setUNewsMedia] = React.useState({});
    const [image, setImage] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const [newsmedia, setNewsMedia] = useState({
        title: "",
        image: "",
        link: "",
    });

    const addNewsMedia = async () => {
        if (!newsmedia.title || !newsmedia.link || !image) {
            toast.error("Please fill all the fields");
            return;
        }
        try {
            const body = new FormData();
            body.append("file", image);
            const response = await fetch("/api/imageUpload", {
                method: "POST",
                body
            });
            let ress = await response.json();
            if (ress.success) {
                const { title, link } = newsmedia;
                const image = ress.data.Location;
                const res = await fetch("/api/newsmedia", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title,
                        image,
                        link
                    }),
                });
                const data = await res.json();
                if (data.success) {
                    toast.success("NewsMedia added successfully", {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: true,
                    });
                    setNewsMedia({
                        title: "",
                        image: "",
                        link: "",
                    });
                    setNewsMedias([...newsmedias, data.newsmedia]);
                    setImage(null);
                } else {
                    toast.error("Something went wrong", {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: true,
                    });
                }
            } else {
                toast.error("Something went wrong", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: true,
                });
            }
        } catch (err) {
            console.error(err.message);
        }
    };


    const deleteNewsMedia = async (id) => {
        try {
            const res = await fetch("/api/newsmedia", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            const data = await res.json();
            setNewsMedias(newsmedias.filter((newsmedia) => newsmedia._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const updateNewsMedia = async (id, newsmedia) => {
        try {
            if (image) {
                const body = new FormData();
                body.append("file", image);
                const response = await fetch("/api/imageUpload", {
                    method: "POST",
                    body
                });
                let ress = await response.json();

                if (ress.success) {
                    const res = await fetch("/api/newsmedia", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id, ...newsmedia, image: ress.data.Location }),
                    });
                    const data = await res.json();
                    setNewsMedias(
                        newsmedias.map((newsmedia) =>
                            newsmedia._id === id ? { ...newsmedia, ...data.newsmedia } : newsmedia
                        )
                    );
                    if (data.success) {
                        toast.success(`NewsMedia ${data.newsmedia.title} updated`);
                    }
                } else {
                    toast.error("Something went wrong", {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: true,
                    });
                }
            } else {
                const res = await fetch("/api/newsmedia", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id, ...newsmedia }),
                });
                const data = await res.json();
                setNewsMedias(
                    newsmedias.map((newsmedia) =>
                        newsmedia._id === id ? { ...newsmedia, ...data.newsmedia } : newsmedia
                    )
                );
                if (data.success) {
                    toast.success(`NewsMedia ${data.newsmedia.title} updated`);
                }
            }
        } catch (error) {
            console.log(error);
        };
    };
    const getNewsMedias = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/newsmedia");
            const data = await res.json();
            setNewsMedias(data.newsmedia);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    useEffect(() => {
        getNewsMedias();
    }, []);
    

    return (
        <div>
            <div>
                <div className='mt-12 '>
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
                    <div className='max-w-[600px] mx-auto'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                            value={newsmedia.title}
                            onChange={(e) =>
                                setNewsMedia({ ...newsmedia, title: e.target.value })
                            }
                        />
                        <input name="myImage" onChange={uploadToClient} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl mt-4 text-grey-500 file:mr-5 file:py-4 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                        <input
                            type='text'
                            placeholder='Link'
                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                            value={newsmedia.link}
                            onChange={(e) =>
                                setNewsMedia({ ...newsmedia, link: e.target.value })
                            }
                        />
                        <button className='bg-blue-500 border-none mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={addNewsMedia}>Add NewsMedia</button>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <div className='mt-4'>
                    <div className='grid grid-cols-4 gap-4'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            newsmedias.map((newsmedia, index) => (
                                <div className='col-span-1' key={index}>
                                    <div className='bg-white shadow-md rounded-lg p-4'>
                                        <div className='grid justify-between'>
                                            <div>
                                                <img
                                                    src={newsmedia.image}
                                                    alt='image'
                                                    className='w-full'
                                                />
                                                <div className='mt-4 text-center'>
                                                    <p className='font-bold'>{newsmedia.title}</p>
                                                </div>
                                            </div>
                                            <div className='flex mt-4 justify-center'>
                                                <button className='bg-blue-500 border-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => {
                                                    setModal(true)
                                                    setUNewsMedia(newsmedia)
                                                }}>Edit</button>
                                                <button className='bg-red-500 border-none hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4' onClick={() => confirm("Are you sure?") && deleteNewsMedia(newsmedia._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* Create modal with tailwind css */}
            <div className={modal ? "fixed z-10 inset-0 overflow-y-auto" : "hidden"}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Update {unewsmedia.title}
                                    </h3>
                                    <div className="mt-2">
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                            value={unewsmedia.title}
                                            onChange={(e) =>
                                                setUNewsMedia({ ...unewsmedia, title: e.target.value })
                                            }
                                        />
                                        <input title="myImage" onChange={uploadToClient} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl mt-4 text-grey-500 file:mr-5 file:py-4 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                                        <input
                                            type='text'
                                            placeholder='Link'
                                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                            value={unewsmedia.link}
                                            onChange={(e) =>
                                                setUNewsMedia({ ...unewsmedia, link: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button className='bg-blue-500 border-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => {
                                            updateNewsMedia(unewsmedia._id, unewsmedia)
                                            setModal(false)
                                        }}>Update</button>
                                        <button className='bg-red-500 border-none hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4' onClick={() => setModal(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

NewsIndex.auth = { role: "admin" }

export default NewsIndex