import React from 'react';
import Book from './book';
import PropTypes from 'prop-types'


const BookShelf = (props) => {
  // Renders each book shelf and passes prop to Book component
  const { allBooks, shelf, onShelfChange } = props;
  const shelfBooks = allBooks.filter(books => books.shelf === shelf.id);
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {shelfBooks.map((book) => (
          <li key={book.id}><Book book={book} onShelfChange={onShelfChange}/></li>
        ))}
      </ol>
    </div>
  </div>
  )
}

BookShelf.propTypes = {
  allBooks: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf;