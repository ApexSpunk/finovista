import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';

function BannersIndex() {

    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modal, setModal] = React.useState(false);
    const [ubanner, setUBanner] = React.useState({});
    const [image, setImage] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
        }
    };

    const [banner, setBanner] = useState({
        name: "",
        logo: "",
        link: "",
    });

    const addBanner = async () => {
        if (!banner.name || !banner.link || !image) {
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
                const { name, link } = banner;
                const logo = ress.data.Location;
                const res = await fetch("/api/banners", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name,
                        logo,
                        link
                    }),
                });
                const data = await res.json();
                if (data.success) {
                    toast.success("Banner added successfully", {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: true,
                    });
                    setBanner({
                        name: "",
                        logo: "",
                        link: "",
                    });
                    setBanners([...banners, data.banner]);
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
        onClose();
    };


    const deleteBanner = async (id) => {
        try {
            const res = await fetch("/api/banners", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            const data = await res.json();
            setBanners(banners.filter((banner) => banner._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const updateBanner = async (id, banner) => {
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
                    const res = await fetch("/api/banners", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ id, ...banner, logo: ress.data.Location }),
                    });
                    const data = await res.json();
                    setBanners(
                        banners.map((banner) =>
                            banner._id === id ? { ...banner, ...data.banner } : banner
                        )
                    );
                    if (data.success) {
                        toast.success(`Banner ${data.banner.name} updated`);
                    }
                } else {
                    toast.error("Something went wrong", {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: true,
                    });
                }
            } else {
                const res = await fetch("/api/banners", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id, ...banner }),
                });
                const data = await res.json();
                setBanners(
                    banners.map((banner) =>
                        banner._id === id ? { ...banner, ...data.banner } : banner
                    )
                );
                if (data.success) {
                    toast.success(`Banner ${data.banner.name} updated`);
                }
            }
        } catch (error) {
            console.log(error);
        };
    };
    const getBanners = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/banners");
            const data = await res.json();
            setBanners(data.banners);
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };
    useEffect(() => {
        getBanners();
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
                    <Box className="flex items-center justify-between titleContent">
                        <Text fontSize='xl' fontWeight='500'>HomePage Banners</Text>
                        <Button onClick={onOpen} colorScheme='whatsapp' variant='solid'> Add Banner</Button>
                    </Box>
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Add Banner</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <Input
                                    type='text'
                                    placeholder='Name'
                                    className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                    value={banner.name}
                                    onChange={(e) =>
                                        setBanner({ ...banner, name: e.target.value })
                                    }
                                />
                                <input name="myImage" onChange={uploadToClient} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl mt-4 text-grey-500 file:mr-5 file:py-4 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                                <Input
                                    type='text'
                                    placeholder='Link'
                                    className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                    value={banner.link}
                                    onChange={(e) =>
                                        setBanner({ ...banner, link: e.target.value })
                                    }
                                />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={addBanner}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <div className='max-w-[600px] mx-auto'>

                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <div className='mt-4'>
                    <div className='grid grid-cols-4 gap-4'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            banners.map((banner, index) => (
                                <div className='col-span-1' key={index}>
                                    <div className='bg-white shadow-md rounded-lg p-4'>
                                        <div className='grid justify-between'>
                                            <div>
                                                <img
                                                    src={banner.logo}
                                                    alt='logo'
                                                    className='w-full'
                                                />
                                                <div className='mt-4 text-center'>
                                                    <p className='font-bold'>{banner.name}</p>
                                                </div>
                                            </div>
                                            <div className='flex mt-4 justify-center'>
                                                <Button onClick={() => { setModal(true); setUBanner(banner) }} colorScheme='whatsapp' variant='solid'>Edit</Button>
                                                <Button onClick={() => confirm("Are you sure?") && deleteBanner(banner._id)} colorScheme='red' variant='solid' className='ml-4'>Delete</Button>
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
                                        Update {ubanner.name}
                                    </h3>
                                    <div className="mt-2">
                                        <input
                                            type='text'
                                            placeholder='Name'
                                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                            value={ubanner.name}
                                            onChange={(e) =>
                                                setUBanner({ ...ubanner, name: e.target.value })
                                            }
                                        />
                                        <input name="myImage" onChange={uploadToClient} className="text-md bg-blue-100 file:uppercase file:font-semibold rounded-3xl mt-4 text-grey-500 file:mr-5 file:py-4 file:px-6 file:rounded-full file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700 w-full" type="file" accept="image/*" />
                                        <input
                                            type='text'
                                            placeholder='Link'
                                            className='w-full border-[1px] shadow-none border-gray-300 p-2 rounded-lg mt-4'
                                            value={ubanner.link}
                                            onChange={(e) =>
                                                setUBanner({ ...ubanner, link: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button className='bg-blue-500 border-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => {
                                            updateBanner(ubanner._id, ubanner)
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

BannersIndex.auth = { role: "admin" }

export default BannersIndex