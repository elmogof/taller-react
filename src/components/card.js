import React from 'react'
import developerImage from '../media/user.png'

export default function Card({ name, age, position, salary }) {
  return (
    <>
      <img className='card-img' src={developerImage} alt='' />
      <div className='card-text'>
        <h2>Nombre {name}</h2>
        <h2>Edad {age}</h2>
        <h2>Puesto {position}</h2>
        <h2>Salario {salary}</h2>
      </div>
    </>
  )
}
