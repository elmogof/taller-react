import React, { createContext, useEffect, useState } from 'react'
import API from '../data/API'

export const DataContextAPI = createContext()

export const DataProviderAPI = ({ children }) => {
  const [developerList, setDeveloperList] = useState()
  const [developerListBackup, setDeveloperListBackup] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const developers = await API.getDevelopers()

      setTimeout(() => {
        setDeveloperList(developers.items)
        setDeveloperListBackup(developers.items)
      }, 1000)
    }

    fetchData()
  }, [])

  return (
    <DataContextAPI.Provider
      value={{
        developerListBackup,
        developerList,
        setDeveloperList,
      }}
    >
      {children}
    </DataContextAPI.Provider>
  )
}
