import React, { Component } from 'react';
import SocialMediaLogos from '../SocialMediaLogos/SocialMediaLogos';
import { Link } from '@reach/router';

class DropDownMenu extends Component {


  render() {
    return (
      <div className="dropDownMenu" style={{transform: this.props.dropDownMenu ? "translateY(0)" : ""}}>
        <div className="dropDownMenuLinks">
          <ul className="topMenuItems">
            <li><p>Logga in</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Prenumerera</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
          </ul>
          <ul className="middleMenuItems">
            <li><p>Nyhetsbrev</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Blogg</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Shop</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
          </ul>
          <ul className="bottomMenuItems">
            <li><p>Om Filter</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Kontakt</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Allmänna villkor</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Hjälp</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
            <li><p>Logga ut</p> <img src={require('../../assets/icons/arrow_dark.svg')} alt=""/> </li>
          </ul>
          <SocialMediaLogos/>
        </div>
      </div>
    )
  }
}

export default DropDownMenu;
