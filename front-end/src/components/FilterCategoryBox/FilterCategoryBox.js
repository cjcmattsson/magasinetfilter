import React, { Component } from 'react';

class FilterCategoryBox extends Component {

  render() {
    return (
        <div className="filterCategoryBox">
          <p>{this.props.filterCategory}</p>
          <img onClick={() => this.props.removeFilterCategory(this.props.filterCategory)} src={require('../../assets/icons/closeblack.svg')} alt=""/>
        </div>
      );
    }
  }

export default FilterCategoryBox;
