import React, { Component } from 'react';

class ArchiveSortingCategory extends Component {

  state = {
    checkbox: false,
  }

  checkCheckbox = () => {
    this.setState({checkbox: !this.state.checkbox})
  }

  render() {
    return (
      <div className="sortingCategory" onClick={this.checkCheckbox}>
        <p>{this.props.category}</p>
        <img src={this.state.checkbox
          ? require('../../assets/icons/checkbox_fill.svg')
          : require('../../assets/icons/checkbox_empty.svg')} alt=""
        />
      </div>
    )
  }
}

export default ArchiveSortingCategory;
