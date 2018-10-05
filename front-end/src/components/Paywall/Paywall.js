import React, {Component} from 'react';

class Paywall extends Component {

  render() {
    const {switchMode} = this.props;

    return (
      <div className="payWall" style={{backgroundColor: switchMode ? "#2C2C2C" :"#E0AB9B" }}>
        <img src={switchMode ? require('../../assets/icons/kaffesmoke_black.gif') : require('../../assets/icons/kaffesmokepink.gif')} alt=""/>
        <div className="paywallText">
          <h3>Unna dig en go stund!</h3>
          <p>Vi är stolta över våra berättelser & vill att även du ska få uppleva varför 100 000 läsare väljer Filter</p>
        </div>
        <div onClick={this.props.paywallUp} className="paywallButton"
          style={{
            backgroundColor: switchMode ? "#E0AB9B" : "#2C2C2C",
            color: switchMode ? "#2C2C2C" : "#FFFFFF",
          }}>
          Fortsätt läsa en artikel gratis!
        </div>
        <p className="paywallLogin">
          Är du redan medlem? <span style={{color: switchMode ? "#E0AB9B": "#2C2C2C"}}> Logga in</span>
      </p>
      </div>
    )
  }
}

export default Paywall;
