import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='posts' type='blog' method='edit' singleApi='singlePost' link="blog"  />
    </div>
  )
}

export default edit
