import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='services' getData='service' type='services' method='edit' singleApi='services' link="service" />
    </div>
  )
}

export default edit
