import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
//import BookStore from './examples/BookStore'
//import UseStateExample from './examples/UseStateExample'
//import ArrayUseStateExample from './examples/ArrayUseStateExample'
//import { DataProvider } from './context/DataContext'
import ObjectUseStateExample from './examples/ObjectUseStateExample'
import { DataProviderAPI } from './context/DataContextAPI'

ReactDom.render(
  <React.StrictMode>
    <DataProviderAPI>
      <ObjectUseStateExample />
    </DataProviderAPI>
    {/* <DataProvider>
      <ArrayUseStateExample />
      <BookStore />
      <UseStateExample />
    </DataProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
