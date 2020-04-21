import React from 'react';
import { Link } from 'react-router-dom'
import SearchedBooksDisplay from './searchedBooksDisplay';
import SearchInputBox from './searchInputBox';
import PropTypes from 'prop-types'

const SearchBooks = (props) => {
  // Houses the search display and search input box component and passes relevant props between them and App.js
  const { onSearch, searchedBooks, onShelfChange, onCloseSearch, allBooks, searchError} = props;
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={onCloseSearch}>Close</Link>
        <SearchInputBox  onSearch={onSearch} onClearInputBox={onCloseSearch}/>
      </div>
      <SearchedBooksDisplay 
      searchedBooks={searchedBooks} 
      onShelfChange={onShelfChange} 
      myCurrentBooks={allBooks}
      searchError={searchError}
      />
    </div>
  )
}

SearchBooks.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchedBooks: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onCloseSearch: PropTypes.func.isRequired,
  allBooks: PropTypes.array.isRequired,
  searchError: PropTypes.bool.isRequired
}


export default SearchBooks;