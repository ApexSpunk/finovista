import { useRouter } from 'next/router';
import React from 'react'
import Editor from '../../../components/Editor/Editor'

function add() {
  const router = useRouter();
  const { route } = router.query;
  const routerData = {
    blog: { api: "posts", type: "blog", method: "add", link: "blog" },
    industry: { api: "industries", type: "industry", method: "add", link: "industry" },
    services: { api: "services", type: "service", method: "add", link: "services" },
    programs: { api: "programs", type: "program", method: "add", link: "programs" },
  }
  return routerData[route] ? <Editor api={routerData[route].api} type={routerData[route].type} method={routerData[route].method} link={routerData[route].link} /> : <p>404 Not Found</p>
}

export default add