import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

class DropDownMenu extends Component {


  render() {
    return (
      <div className="dropDownMenu" style={{transform: this.props.dropDownMenu ? "translateY(0)" : ""}}>
        <SearchBar/>
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
        </div>
      </div>
    )
  }
}

export default DropDownMenu;
