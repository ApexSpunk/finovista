import React from 'react'
import Editor from '../../../components/Editor/Editor'

function add() {
  return (
    <div>
      <Editor api='services' type='services' method='add' singleApi='singleService' link="service"  />
    </div>
  )
}

export default add
