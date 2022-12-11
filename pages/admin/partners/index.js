import React from "react";
import Head from "next/head";
import Navbar from "../../../components/admin/Navbar";
import Topbar from "../../../components/admin/Topbar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import PartnersIndex from "./PartnersIndex";

function index() { 
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

                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid ">
                                <div className="w-full">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <div className="flex items-center justify-between titleContent">
                                                <h1>All Partners</h1>
                                            </div>
                                            <div className="grid">
                                                <PartnersIndex />
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

index.auth = {role: "admin"};

export default index;
