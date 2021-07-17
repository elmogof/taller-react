import BookImage from './bookImage'
import Author from './author'
import Title from './title'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function Books() {
  const { booksList } = useContext(DataContext)
  return (
    <>
      {booksList.map((book) => {
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
