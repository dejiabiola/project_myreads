import React, { Component } from 'react';
import SelectBookShelf from './selectBookShelf';


class Book extends Component {
  render() {
    const { book, onShelfChange } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
          <SelectBookShelf currShelf={book.shelf} onShelfChange={onShelfChange} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    )
  }
}


export default Book;