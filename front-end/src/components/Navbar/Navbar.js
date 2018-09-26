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
          <Link to="/"><img src={require('../../assets/icons/logotypfilterblack.svg')} alt=""/></Link>
          <Link to="/laslista"><img src={require('../../assets/icons/icon_black_save.svg')} alt=""/></Link>
          <Link to="/arkiv"><img src={require('../../assets/icons/icon_black_search.svg')} alt=""/></Link>
          <img src={require('../../assets/icons/switchmoon.svg')} alt=""/>
          <img src={require('../../assets/icons/icon_black_menu.svg')} alt=""/>
        </div>
      </div>
    )
  }
}

export default Navbar;
