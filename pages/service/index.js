import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import Service from '../../components/Service/Service'

function industry() {
    return (
        <div>
            <Head>
                <title>Service | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>  
            <div>
                <Navbar />
                <div className="eventPostMain">
                    <div>
                        <Service />
                    </div>
                    <div className="">
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default industry