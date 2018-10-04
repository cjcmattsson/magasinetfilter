import React, { Component } from 'react';

class ArchiveFilterCategory extends Component {

  state = {
    checkbox: false,
  }

  checkCheckbox = () => {
    this.setState({checkbox: !this.state.checkbox})
  }

  render() {
    return (
      <div className="filterCategory" onClick={this.checkCheckbox}>
        <img src={this.state.checkbox
            ? require('../../assets/icons/checkbox_fill.svg')
            : require('../../assets/icons/checkbox_empty.svg')} alt=""
            />
          {this.props.icon && <img src={this.props.icon} alt=""/>}
        <p>{this.props.category}</p>
      </div>
    )
  }
}

export default ArchiveFilterCategory;
