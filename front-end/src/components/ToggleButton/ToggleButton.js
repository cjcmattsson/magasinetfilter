import React, { Component } from 'react';
import './ToggleButton.css';

class ToggleButton extends Component {

  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    )
  }
}

export default ToggleButton;
