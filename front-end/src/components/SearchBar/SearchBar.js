import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const searchIcon = {
      backgroundImage: `url(${require('../../assets/icons/search_dark.svg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '5% 50%',
    }

    return (
        <div className="searchFieldWrapper" style={searchIcon}>
          <input className="searchFieldInput" type="text" placeholder="Sök" />
        </div>
    )
  }
}

export default SearchBar;
