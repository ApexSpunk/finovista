import Head from 'next/head'
import React from 'react'
import Navbar from '../../components/Utils/Navbar'
import Footer from '../../components/Utils/Footer'
import Post from '../../components/Post/Post'
import Grid from '../../components/Post/GridPost'
import { useRouter } from 'next/router'
import Sidebar from '../../components/Utils/Sidebar'

function blog() {
    const router = useRouter();
    const { route } = router.query;
    const routerData = {
        blog: { type: "posts", link: "blog", api: "posts", getData: "posts", grid: false },
        program: { type: "programs", link: "program", api: "programs", getData: "programs", grid: false },
        service: { type: "services", link: "service", api: "services", getData: "services", grid: true },
        industry: { type: "industries", link: "industry", api: "industries", getData: "industries", grid: true }
    }
    return (
        <div>
            <Head>
                <title>{route ? route.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") : "Blog Post"} | Finovista</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <Navbar />
                <div className={routerData[route]?.grid ? "eventPostMain" : ""}>
                    {
                        routerData[route] ? routerData[route].grid ? <Grid type={routerData[route].type} link={routerData[route].link} api={routerData[route].api} getData={routerData[route].getData} /> : <Post type={routerData[route].type} link={routerData[route].link} api={routerData[route].api} getData={routerData[route].getData} /> : <p>404</p>
                    }
                    {
                        routerData[route] && routerData[route].grid ? <div className="">
                            <Sidebar />
                        </div> : ""
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default blog