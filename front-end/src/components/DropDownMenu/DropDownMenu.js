import React, { Component } from 'react';
import { Link } from '@reach/router';

class DropDownMenu extends Component {


  render() {
    return (
      <div className="dropDownMenu" style={{transform: this.props.dropDownMenu ? "translateY(0)" : ""}}>
        <div className="dropDownMenuLinks">
          <ul className="topMenuItems">
            <li>
              Logga in
            </li>
            <li>
              Prenumerera
            </li>
          </ul>
          <ul className="topMenuItems">
            <li>
              Hej
            </li>
            <li>
              på
            </li>
          </ul>
          <ul className="topMenuItems">
            <li>
              Hej
            </li>
            <li>
              på
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default DropDownMenu;
