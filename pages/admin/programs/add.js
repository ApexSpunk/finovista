import React from 'react'
import Editor from '../../../components/Editor/Editor'

function add() {
  return (
    <div>
      <Editor api='programs' type='programs' method='add' link="program" />
    </div>
  )
}

export default add
