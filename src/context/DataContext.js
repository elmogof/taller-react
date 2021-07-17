import { peopleList, booksList } from '../data/dataList'
import React, { createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider
      value={{
        peopleList,
        booksList,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
