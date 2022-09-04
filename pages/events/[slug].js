import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import SinlePostEvent from '../../components/Event/SinglePostEvent'

const eventPost = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <Navbar />
      <Head>
        <title>Event Post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='eventPostMain'>
          <div>
            <SinlePostEvent title={slug} />
          </div>
          <div className=''>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default eventPost