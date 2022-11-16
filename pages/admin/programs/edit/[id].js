import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='programs' type='programs' method='edit' singleApi='singleProgram' />
    </div>
  )
}

export default edit
