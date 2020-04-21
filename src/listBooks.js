import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './bookShelf';
import PropTypes from 'prop-types'


const ListBooks = (props) => {
  // Passes props to Bookshelf component and also renders h1 and to-searchpage button elements on the UI
  const { allBooks, bookShelves, onShelfChange } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookShelves.map(shelves => (
            <BookShelf allBooks={allBooks} shelf={shelves} onShelfChange={onShelfChange} key={shelves.id}/>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="button">Add a book</Link>
      </div>
    </div>
  )
}

ListBooks.propTypes = {
  allBooks: PropTypes.array.isRequired,
  bookShelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default ListBooks;