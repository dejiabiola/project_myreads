import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './listBooks';
import SearchBooks from './searchBooks';




const bookShelves = [
  {id: "currentlyReading", title: "Currently Reading"},
  {id:"wantToRead", title: "Want To Read"},
  {id:"read", title: "Read"}
]
class BooksApp extends Component {
  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  shelfChange = (newShelf, selectedBook) => {
    BooksAPI.update(selectedBook, newShelf)
      .catch(err => console.log(err));

    if (newShelf === "none") {
      this.setState((oldState) => ({
        books: oldState.books.filter(book => book.id !== selectedBook.id)
      }))
      return;    
    }
    selectedBook.shelf = newShelf;
    this.setState((oldState) => ({
      books: oldState.books.filter(book => book.id !== selectedBook.id).concat([selectedBook])
    }))  
  }

  searchBooksAPI = (query) => {
    BooksAPI.search(query)
    .then(books => {
      if (books.error === 'empty query') {
        console.log("nothing dey here")
      } else {
        this.setState({
          searchedBooks: books
        })
      }
     
    }) 
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks allBooks={this.state.books} bookShelves={bookShelves} onShelfChange={this.shelfChange}/>
        )}
        />
        <Route path="/search" render={() => (
          <SearchBooks onSearch={this.searchBooksAPI} searchedBooks={this.state.searchedBooks}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
