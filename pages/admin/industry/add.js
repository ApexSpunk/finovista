import React from 'react'
import Editor from '../../../components/Editor/Editor'

function add() {
  return (
    <div>
      <Editor api='industries' type='industry' method='add' singleApi='singleIndustry' link="industry"  />
    </div>
  )
}

export default add
