import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import BookImage from './components/bookImage'
import Author from './components/author'
import Title from './components/title'

function Books() {
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
    // {
    //   id: 4,
    //   author: 'Asimov',
    //   title: 'Fundación',
    //   img_url:
    //     'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    // },
    // {
    //   id: 5,
    //   author: 'Asimov',
    //   title: 'Fundación',
    //   img_url:
    //     'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    // },
    // {
    //   id: 6,
    //   author: 'Asimov',
    //   title: 'Fundación',
    //   img_url:
    //     'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    // },
    // {
    //   id: 7,
    //   author: 'Asimov',
    //   title: 'Fundación',
    //   img_url:
    //     'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    // },
    // {
    //   id: 8,
    //   author: 'Asimov',
    //   title: 'Fundación',
    //   img_url:
    //     'https://images-na.ssl-images-amazon.com/images/I/41BHPsvj5BL._SX327_BO1,204,203,200_.jpg',
    // },
  ]

  return (
    <>
      {books.map((book) => {
        return (
          <div className='book' key={book.id}>
            <BookImage img_url={book.img_url} />
            <Author author={book.author} />
            <Title title={book.title} />
          </div>
        )
      })}
    </>
  )
}

function BookStore() {
  return (
    <div className='container'>
      <Books />
    </div>
  )
}

ReactDom.render(
  <React.StrictMode>
    <BookStore />
  </React.StrictMode>,
  document.getElementById('root')
)
