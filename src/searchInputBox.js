import React from 'react';
import PropTypes from 'prop-types'


const SearchInputBox = (props) => {
  // Handles searching of new books and sends query values up to App.js
  const { onClearInputBox, onSearch } = props
  
  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length < 1) {
      onClearInputBox()
      return;
    }
     onSearch(value)
  }

  return (
    <div className="search-books-input-wrapper">
      <input type="text" placeholder="Search by title or author" name="searchBook" onChange={handleChange}/>
    </div>
  )
}

SearchInputBox.propTypes = {
  onClearInputBox: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default SearchInputBox;