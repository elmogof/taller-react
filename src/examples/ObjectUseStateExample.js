import React, { useState } from 'react'
import developerImage from '../media/user.png'

export default function ObjectUseStateExample() {
  const exampleObject = {
    name: 'Juan Perez',
    age: 30,
    position: 'Backed developer',
    salary: '$2000',
  }

  const [developer, setDeveloper] = useState(exampleObject)

  const changePosition = () => {
    setDeveloper({
      ...developer,
      position: 'Lead backend developer',
      salary: '$3000',
    })
  }
  return (
    <div className='container'>
      <h1 className='title'>Developer card</h1>

      <div className='card'>
        <img className='card-img' src={developerImage} alt='' />
        <div className='card-text'>
          <h2>Nombre {developer.name}</h2>
          <h2>Edad {developer.age}</h2>
          <h2>Puesto {developer.position}</h2>
          <h2>Salario {developer.salary}</h2>
        </div>
        <button className='btn card-btn' onClick={() => changePosition()}>
          Give a promotion
        </button>
      </div>
    </div>
  )
}
