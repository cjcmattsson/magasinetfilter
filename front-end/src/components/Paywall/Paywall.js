import React, {Component} from 'react';

class Paywall extends Component {

  state = {
    oneFreeArticleOpen: false,
    twoFreeArticlesOpen: false,
  }

  componentDidMount() {
    if (localStorage.getItem("freeArticle1")) {
      this.setState({oneFreeArticleOpen : true})
    } else if (localStorage.getItem("freeArticle1") && localStorage.getItem("freeArticle2")) {
      this.setState({twoFreeArticlesOpen : true})
      console.log("2 open dawg");
    }
  }

  render() {
    const {switchMode} = this.props;
    const {oneFreeArticleOpen} = this.state;

    return (
      <div className="payWall" style={{backgroundColor: switchMode ? "#2C2C2C" :"#E0AB9B" }}>
        {oneFreeArticleOpen ?
          <img src={switchMode ? require('../../assets/icons/kaffetom.gif') : require('../../assets/icons/kaffetompink.gif')} alt=""/>
          : <img src={switchMode ? require('../../assets/icons/kaffesmoke_black.gif') : require('../../assets/icons/kaffesmokepink.gif')} alt=""/>
        }
        <div className="paywallText">
        {oneFreeArticleOpen ? <h3>Påtår?</h3> : <h3>Unna dig en go stund!</h3> }
        {oneFreeArticleOpen ? <p>Signa upp dig på vårt nyhetsbrev och få två gratisartiklar till!</p>
        : <p>Vi är stolta över våra berättelser & vill att även du ska få uppleva varför 100 000 läsare väljer Filter</p>
         }
        </div>
        {oneFreeArticleOpen ?
          <div className="newsletterSignup">
            <input type="text" placeholder="E-postadress"/>
            <div onClick={this.props.newsletterPaywallUp} className="newsletterButton" style={{
              backgroundColor: switchMode ? "#E0AB9B" : "#2C2C2C",
              color: switchMode ? "#2C2C2C" : "#FFFFFF",
              }}>OK</div>
          </div>
          :
        <div onClick={this.props.paywallUp} className="paywallButton"
          style={{
            backgroundColor: switchMode ? "#E0AB9B" : "#2C2C2C",
            color: switchMode ? "#2C2C2C" : "#FFFFFF",
          }}>
          Fortsätt läsa en artikel gratis!
        </div> }
          <p className="paywallLogin">
          Är du redan medlem? <span style={{color: switchMode ? "#E0AB9B": "#2C2C2C"}}> Logga in</span>
          </p>
      </div>
    )
  }
}

export default Paywall;
