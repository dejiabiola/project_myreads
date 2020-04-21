import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './bookShelf';







class ListBooks extends Component {
  render() {
    const { allBooks, bookShelves, onShelfChange } = this.props;
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
}


export default ListBooks;