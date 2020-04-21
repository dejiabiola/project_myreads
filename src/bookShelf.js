import React, { Component } from 'react';
import Book from './book';


class BookShelf extends Component {
  render() {
    const { allBooks, shelf, onShelfChange } = this.props;
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
}

export default BookShelf;