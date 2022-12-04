import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='posts' getData='post' type='blog' method='edit' link="blog"  />
    </div>
  )
}

export default edit
