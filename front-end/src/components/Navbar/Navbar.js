import React, { Component } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import { Router, Link } from "@reach/router";
import './Navbar.css';

class Navbar extends Component {

  state = {
    active: false
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">Filter</Link>
        <Link to="/arkiv">Arkiv</Link>
        <Link to="/laslista">Läslista</Link>
        <div className="nightMode">
          <ToggleButton />
        </div>
        <div className="hamburgerMenu">|||</div>
      </div>
    )
  }
}

export default Navbar;
