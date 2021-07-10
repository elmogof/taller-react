import BookImage from './bookImage'
import Author from './author'
import Title from './title'
import { booksList } from '../data/dataList'

export default function Books() {
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
