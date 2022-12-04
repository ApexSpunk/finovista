import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='programs' getData='program' type='programs' method='edit' link="program"  />
    </div>
  )
}

export default edit
