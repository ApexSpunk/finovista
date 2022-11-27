import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='programs' type='programs' method='edit' singleApi='singleProgram' link="program"  />
    </div>
  )
}

export default edit
