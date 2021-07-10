import React, { useState } from 'react'
import { peopleList } from '../data/dataList'

export default function ArrayUseStateExample() {
  const [people, setPeople] = useState(peopleList)
  console.log(people)

  const deletePerson = (id) => {
    const filteredList = people.filter((person) => person.id !== id)
    setPeople(filteredList)
  }

  return (
    <div className='container'>
      <h1 className='title'>Backend Developers List</h1>
      <ul>
        {people.map((person) => {
          const { id, name } = person

          return (
            <li className='list-item' key={id}>
              <span>{name}</span>
              <button className='list-btn' onClick={() => deletePerson(id)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
      <div style={{ display: 'flex' }}>
        <button className='danger-btn' onClick={() => setPeople([])}>
          Clear list
        </button>
        <button className='normal-btn' onClick={() => setPeople(peopleList)}>
          Reset list
        </button>
      </div>
    </div>
  )
}
