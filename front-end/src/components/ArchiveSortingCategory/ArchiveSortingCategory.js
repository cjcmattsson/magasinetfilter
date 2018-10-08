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
        <p onClick={this.props.getTextContent}>{this.props.category}</p>
        <img onClick={this.props.getTextContent} src={this.state.checkbox
          ? require('../../assets/icons/checkbox_fill.svg')
          : require('../../assets/icons/checkbox_empty.svg')} alt=""
        />
      </div>
    )
  }
}

export default ArchiveSortingCategory;
