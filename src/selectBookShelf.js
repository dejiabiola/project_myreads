import React from 'react';
import PropTypes from 'prop-types'


const SelectBookShelf = (props) => {
  // Handles rendering of select input tag on each book and passes prop back to App.js upon user interaction
  const {onShelfChange, book, currShelf} = props;

  const alertShelfChange = (event) => {
    const value = event.target.value
    onShelfChange(value, book);
  }

  return (
    <div className="book-shelf-changer">
      <select value={currShelf} onChange={alertShelfChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

SelectBookShelf.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  currShelf: PropTypes.string.isRequired
}

export default SelectBookShelf;