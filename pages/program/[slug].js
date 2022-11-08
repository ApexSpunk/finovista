import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import SinglePostProgram from "../../components/Program/SinglePostProgram";

const programPost = () => {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <Navbar />
      <Head>
        <title>
          {slug ? slug.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") : "Program Post"} | Finovista
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="eventPostMain">
          <div>
            <SinglePostProgram />
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
