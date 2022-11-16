import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='industries' type='industry' method='edit' singleApi='singleIndustry' />
    </div>
  )
}

export default edit
