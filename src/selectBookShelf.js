import React, { Component } from 'react';


class SelectBookShelf extends Component {
  
  alertShelfChange = (event) => {
    const value = event.target.value
    this.props.onShelfChange(value, this.props.book);
  }


  render() {
    const { currShelf } = this.props
    return (
      <div className="book-shelf-changer">
        <select value={currShelf} onChange={this.alertShelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}



export default SelectBookShelf