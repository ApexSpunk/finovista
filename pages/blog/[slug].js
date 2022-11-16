import { useRouter, useState } from "next/router";
import Navbar from "../../components/Utils/Navbar";
import Head from "next/head";
import Footer from "../../components/Utils/Footer";
import Sidebar from "../../components/Utils/Sidebar";
import SinglePost from "../../components/Post/SinglePost";

const programPost = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <Navbar />
      <Head>
        <title>
          {slug ? slug.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") : "Blog Post"} | Finovista
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="eventPostMain">
          <div>
            <SinglePost api='singlePost' type='posts' />
          </div>
          <div className="">
            <Sidebar />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default programPost;
