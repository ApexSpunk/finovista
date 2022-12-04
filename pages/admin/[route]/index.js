import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../../components/admin/Post'

function index() {
  const router = useRouter();
  const { route } = router.query;
  const routerData = {
    blog: { api: "posts", getData: "posts", type: "Posts", link: "blog" },
    industry: { api: "industries", getData: "industries", type: "Industries", link: "industry" },
    services: { api: "services", getData: "services", type: "Services", link: "service" },
    programs: { api: "programs", getData: "programs", type: "Programs", link: "program" },
  }
  return routerData[route] ? <Post api={routerData[route].api} getData={routerData[route].getData} type={routerData[route].type} link={routerData[route].link} /> : <p>404 Not Found</p>
}

export default index
