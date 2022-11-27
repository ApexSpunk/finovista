import React from 'react'
import Editor from '../../../../components/Editor/Editor'

function edit() {
  return (
    <div>
      <Editor api='industries' type='industry' method='edit' singleApi='singleIndustry' link="industry"  />
    </div>
  )
}

export default edit
