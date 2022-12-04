import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='services' getData='service' type='services' method='edit' link="service" />
    </div>
  )
}

export default edit
