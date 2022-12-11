import { useRouter } from 'next/router';
import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  const router = useRouter();
  const { route } = router.query;
  const routerData = {
    blog: { api: "posts", getData: "post", type: "blog", method: "edit", link: "blog" },
    industry: { api: "industries", getData: "industry", type: "industry", method: "edit", link: "industry" },
    services: { api: "services", getData: "service", type: "service", method: "edit", link: "service" },
    programs: { api: "programs", getData: "program", type: "program", method: "edit", link: "program" },

  }
  return routerData[route] ? <Editor api={routerData[route].api} getData={routerData[route].getData} type={routerData[route].type} method={routerData[route].method} link={routerData[route].link} /> : <p>404 Not Found</p>
}
edit.auth = { role: "admin" }
export default edit