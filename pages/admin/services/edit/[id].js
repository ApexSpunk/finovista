import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='services' type='services' method='edit' singleApi='singleService' link="service" />
    </div>
  )
}

export default edit
