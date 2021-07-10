import React, { useState } from 'react'

export default function ArrayUseStateExample() {
  const peopleList = [
    {
      id: 1,
      name: 'Máx',
    },
    {
      id: 2,
      name: 'Héctor',
    },
    {
      id: 3,
      name: 'Azalea',
    },
    {
      id: 4,
      name: 'Cristhian',
    },
  ]
  const [people, setPeople] = useState(peopleList)

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

  console.log('Lista de personas: ', people)

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
        <button className='danger-btn' onClick={() => clearList()}>
          Clear list
        </button>
        <button className='normal-btn' onClick={() => resetList()}>
          Reset list
        </button>
      </div>
    </div>
  )
}
