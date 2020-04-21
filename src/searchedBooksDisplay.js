import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';


const SearchedBooksDisplay = (props) => {
  // Handles display of books in searched array. Adds shelf property to each object in array and 
  // passes each object in array to Book component
  const {searchedBooks, onShelfChange, myCurrentBooks, searchError} = props;

  const modifiedSearchBooks = searchedBooks.map(searchBook => {
    myCurrentBooks.forEach(mybook => {
      if (searchBook.id === mybook.id) {
        searchBook.shelf = mybook.shelf;
      } 
    })
    if (!searchBook.shelf) {
      searchBook.shelf = "none";
    }
    return searchBook;
  })

  
  return (
    <div className="search-books-results">
      {searchError === true ? (
        <div>Oops, we currently do not have the book you are looking for.</div>
      ) : (
        <ol className="books-grid">
      {modifiedSearchBooks.length > 0 && (modifiedSearchBooks.map(book => (
        <li key={book.id}><Book book={book} onShelfChange={onShelfChange}/></li> 
      )))}
      </ol>
      )}  
    </div>
  )
}

SearchedBooksDisplay.propTypes = {
  searchedBooks: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  myCurrentBooks: PropTypes.array.isRequired,
  searchError: PropTypes.bool.isRequired
}



export default SearchedBooksDisplay;