import React, { Component } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import { Link } from "@reach/router";

class Navbar extends Component {

  state = {
    active: false
  }


  render() {
    const NavLink = props => (
      <Link
        {...props}
        getProps={({ isCurrent }) => {
          // the object returned here is passed to the
          // anchor element's props
          return {
            style: {
              backgroundColor: isCurrent ? "red" : "#ECECEC"
            }
          };
        }}
      />
    );
    return (
      <div className="navbar">
        <div className="navLinks">
          <NavLink to="/"><img src={require('../../assets/icons/logotypfilterblack.svg')} alt=""/></NavLink>
          <NavLink to="/laslista"><img src={require('../../assets/icons/icon_black_save.svg')} alt=""/></NavLink>
          <NavLink to="/arkiv"><img src={require('../../assets/icons/icon_black_search.svg')} alt=""/></NavLink>
          <img src={require('../../assets/icons/switchmoon.svg')} alt=""/>
          <img src={require('../../assets/icons/icon_black_menu.svg')} alt=""/>
        </div>
      </div>
    )
  }
}

export default Navbar;
