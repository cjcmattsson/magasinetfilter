import React, { Component } from 'react';

class FilterCategoryBox extends Component {

  render() {
    return (
        <div className="filterCategoryBox">
          <p>{this.props.filterCategory}</p>
          <img src={require('../../assets/icons/closeblack.svg')} alt=""/>
        </div>
      );
    }
  }

export default FilterCategoryBox;
