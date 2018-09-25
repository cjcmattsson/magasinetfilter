import React, { Component } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import { Link } from "@reach/router";

class Navbar extends Component {

  state = {
    active: false
  }

  render() {
    return (
      <div className="navbar">
        <div className="navLinks">
          <Link to="/">Filter</Link>
          <Link to="/arkiv">Arkiv</Link>
          <Link to="/laslista">Läslista</Link>
        </div>
        <div className="nightMode">
          <ToggleButton />
        </div>
        <div className="hamburgerMenu">|||</div>
      </div>
    )
  }
}

export default Navbar;
