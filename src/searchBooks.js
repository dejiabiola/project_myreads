import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './book';


class SearchInputBox extends Component {

  handleChange = (event) => {
    const value = event.target.value;
    if (value.length < 1) {
      return;
    }
     this.props.onSearch(value)
  }
  render() {
    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author" name="searchBook" onChange={this.handleChange}/>
      </div>
    )
  }
  
}

class SearchedBooksDisplay extends Component {
  render() {
    const {searchedBooks} = this.props;
    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {searchedBooks.length > 0 && (searchedBooks.map(book => (
          <li key={book.id}><Book book={book} /></li> 
        )))}
        </ol>
      </div>
    )
  }
}


class SearchBooks extends Component {


  render() {
    const { onSearch, searchedBooks } = this.props;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <SearchInputBox  onSearch={onSearch}/>
        </div>
        <SearchedBooksDisplay searchedBooks={searchedBooks}/>
      </div>
    )
  }
}


export default SearchBooks;