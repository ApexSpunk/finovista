import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='industries' getData='industry' type='industry' method='edit' singleApi='industries' link="industry"  />
    </div>
  )
}

export default edit
