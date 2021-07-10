import React, { useState } from 'react'

export default function UseStateExample() {
  const [title, setTitle] = useState('Hello, world!')

  const handleClick = () => {
    if (title === 'Hello, world!') {
      setTitle(`Hello i'm a useState example`)
    } else setTitle('Hello, world!')
  }
  return (
    <div className='container'>
      <h1 className='title'>{title}</h1>
      <button className='btn' onClick={handleClick}>
        Change state
      </button>
    </div>
  )
}
