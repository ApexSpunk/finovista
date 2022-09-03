import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Head from 'next/head'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

import SinlePostEvent from '../../components/SinglePostEvent'

const eventPost = () => {
  const router = useRouter()
  const { pid } = router.query

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
          <SinlePostEvent title={pid} />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default eventPost