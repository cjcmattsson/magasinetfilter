import React, { Component } from 'react';

class CategoryBox extends Component {

  render() {
    return (
        <div className="categoryBox">
          <p>
            {this.props.category}
          </p>
        </div>
      );
    }
  }

export default CategoryBox;
