import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import BookStore from './examples/BookStore'
import UseSatateExample from './examples/UseStateExample'
import ArrayUseStateExample from './examples/ArrayUseStateExample'
import ObjectUseStateExample from './examples/ObjectUseStateExample'

ReactDom.render(
  <React.StrictMode>
    <ObjectUseStateExample />
    {/* <ArrayUseStateExample /> */}
    {/* <UseSatateExample /> */}
    {/* <BookStore /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
