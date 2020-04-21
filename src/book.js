import React from 'react';
import SelectBookShelf from './selectBookShelf';
import PropTypes from 'prop-types'


const Book = (props) => {
  // Handles rendering of each book on both SearchedBooksDisplay and BookShelf components and passes props to SelectBookShelf
  const { book, onShelfChange } = props
  return (
    <div className="book">
      <div className="book-top">
      {book.imageLinks !== undefined && (
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
      )}
        <SelectBookShelf currShelf={book.shelf} onShelfChange={onShelfChange} book={book}/>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors !== undefined && (
        <div>
        {book.authors.map((author, index) => (
          <div className="book-authors" key={index}>{author}</div>
        ))}
        </div> 
      )}  
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book;