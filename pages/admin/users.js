import React, { useState } from "react";
import Navbar from "../../components/admin/Navbar";
import Topbar from "../../components/admin/Topbar";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function index() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const handleChanges = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    console.log(userData);
    const addUser = () => {
        axios.post("/api/users", userData).then((res) => {
            if (res.data.success) {
                toast.success("User added successfully", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };
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
                        <ToastContainer />
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <div className="flex items-center justify-between titleContent">
                                                <h1>Add User</h1>
                                            </div>
                                            <div className="grid">
                                                <div className="w-full">
                                                    <input type="text" placeholder="Name" className="p-2 w-full mt-2 rounded-xl border-black border-[1px]" onChange={handleChanges} name="name" value={userData.name} />
                                                    <input type="email" placeholder="Email" className="p-2 w-full mt-4 rounded-xl border-black border-[1px]" onChange={handleChanges} name="email" value={userData.email} />
                                                    <input type="password" placeholder="Password" className="p-2 w-full mt-4 rounded-xl border-black border-[1px]" onChange={handleChanges} name="password" value={userData.password} />
                                                    <select name="role" id="" className="p-2 w-full mt-4 rounded-xl border-black border-[1px]" onChange={handleChanges}>
                                                        <option value="user">User</option>
                                                        <option value="editor">Editor</option>
                                                        <option value="admin">Admin</option>
                                                    </select>
                                                    <button className="bg-blue-500 border-0 text-white p-2 w-full mt-4 rounded-xl cursor-pointer" onClick={addUser}>
                                                        Add User
                                                    </button>
                                                </div>
                                                <div className=" mt-12 flex items-center justify-between titleContent">
                                                    <h1>All Users</h1>
                                                </div>
                                                <div className="w-full">
                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                                            <div className="ml-4">
                                                                <h1 className="text-lg font-semibold">John Doe</h1>
                                                                <p className="text-sm text-gray-500">Admin</p>
                                                            </div>
                                                            <div className="ml-4">
                                                                <h1 className="text-lg font-semibold">
                                                                    <span className="text-green-500">Active</span>
                                                                </h1>
                                                                </div>
                                                                </div>
                                                                </div>
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

index.auth = { role: "admin" }

export default index;

