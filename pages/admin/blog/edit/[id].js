import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='posts' getData='post' type='blog' method='edit' singleApi='posts' link="blog"  />
    </div>
  )
}

export default edit
