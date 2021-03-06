import React from 'react';
import ReviewList from './ReviewList';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onSearchClick(e) {
    if (e.which == 13) {
      const value = document.getElementById('search-entry').value;
      this.props.callback(value);
    }
  }

  render() {
    return (
      <div className="search">
        <span>
          <input
            id="search-entry"
            type="text"
            placeholder="Search reviews"
            onKeyUp={(e) => {this.onSearchClick(e)}}
          />
        </span>
      </div>
    );
  }
}

export default SearchBar;
