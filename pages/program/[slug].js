import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import SinglePostProgram from "../../components/Program/SinglePostProgram";
import RelatedPost from "../../components/RelatedPost";
import { useEffect, useState } from "react";

const programPost = () => {
  const router = useRouter();

  const { slug } = router.query;
  const [program, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getEvents = async () => {
      try {
        const cate = await fetch("/api/category");
        let cateRes = await cate.json();
        setCategories(cateRes.category);
        const response = await fetch(`/api/programs?limit=3`);
        let ress = await response.json();
        setPrograms(ress.programs);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    getEvents();
  }, []);

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
        <RelatedPost type={"programs"} link='program' data={program} loading={loading} />
        <Footer />
      </div>
    </div>
  );
};

export default programPost;
