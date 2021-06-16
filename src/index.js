import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function Book() {
  const numbers = [1, 2, 3, 4, 5, 6, 7]

  // const book = {
  //   author: 'Stephen King',
  //   title: 'Cementerio de mascotas',
  //   img_url: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788497930994.jpg',
  // }

  const books = [
    {
      id: 1,
      author: 'Stephen King',
      title: 'Cementerio de mascotas',
      img_url: 'https://imagessl4.casadellibro.com/a/l/t7/94/9788497930994.jpg',
    },
    {
      id: 2,
      author: 'George Orwell',
      title: '1984',
      img_url:
        'https://images-na.ssl-images-amazon.com/images/I/81ZVmNRdoRL.jpg',
    },
    {
      id: 3,
      author: 'Asimov',
      title: 'Fundación',
      img_url:
        'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    },
  ]
  // console.log('Lista de libros ', books[2])

  return (
    <div
      className='container'
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      {books.map((book) => {
        return (
          <div key={book.id} style={{ margin: '1rem' }}>
            <img className='img-size' src={book.img_url} alt='portada libro' />
            <h1>{book.author}</h1>
            <h2>{book.title}</h2>
          </div>
        )
      })}

      {/* <h3>Mapeo por función map()</h3>
      {numbers.map((number) => {
        return <p key={number}>{number}</p>
      })} */}
    </div>
  )
}

ReactDom.render(
  <React.StrictMode>
    <Book />
  </React.StrictMode>,
  document.getElementById('root')
)
