import React, { useContext } from 'react'
import Card from '../components/card'
import Loading from '../components/loading'
import { DataContextAPI } from '../context/DataContextAPI'

const changePosition = (id, developerList, setDeveloperList) => {
  const editedDeveloperList = developerList.map((developer) => {
    if (developer.id === id) {
      return {
        ...developer,
        position: 'Lead backend developer',
        salary: '$3000',
      }
    } else {
      return {
        ...developer,
      }
    }
  })
  setDeveloperList(editedDeveloperList)
}

export default function ObjectUseStateExample() {
  const { developerListBackup, developerList, setDeveloperList } =
    useContext(DataContextAPI)
  console.log(developerList)

  const deleteDeveloper = (id) => {
    const filteredList = developerList.filter(
      (developer) => developer.id !== id
    )
    setDeveloperList(filteredList)
  }

  const clearList = () => {
    setDeveloperList([])
  }

  const resetList = () => {
    setDeveloperList(developerListBackup)
  }

  return (
    <div className='container'>
      <h1 className='title'>Developer card</h1>
      {!developerList ? (
        <Loading />
      ) : (
        developerList.map((developer) => {
          return (
            <div className='card' key={developer.id}>
              <Card {...developer} />
              <button
                className='btn success-btn card-btn'
                onClick={() =>
                  changePosition(developer.id, developerList, setDeveloperList)
                }
              >
                Give a promotion
              </button>
              <button
                className='btn danger-btn card-delete-btn'
                onClick={() => deleteDeveloper(developer.id)}
              >
                Delete
              </button>
            </div>
          )
        })
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <button className='btn danger-btn' onClick={() => clearList()}>
          Clear list
        </button>
        <button className='btn normal-btn' onClick={() => resetList()}>
          Reset list
        </button>
      </div>
    </div>
  )
}
