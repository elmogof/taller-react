import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function ArrayUseStateExample() {
  const { peopleList, booksList } = useContext(DataContext)

  const [people, setPeople] = useState(peopleList)

  console.log(people)
  console.log(booksList)

  const deletePerson = (id) => {
    const filteredList = people.filter((person) => person.id !== id)
    setPeople(filteredList)
  }

  const clearList = () => {
    setPeople([])
  }

  const resetList = () => {
    setPeople(peopleList)
  }

  return (
    <div className='container'>
      <h1 className='title'>Backend Developers List</h1>
      <ul style={{ padding: '0' }}>
        {people.map((person) => {
          const { id, name } = person

          return (
            <li className='list-item' key={id}>
              <h2>{name}</h2>
              <button
                className='list-btn danger-btn'
                onClick={() => deletePerson(id)}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
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
