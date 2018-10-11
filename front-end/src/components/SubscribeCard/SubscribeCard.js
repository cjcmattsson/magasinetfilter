import React, { Component } from 'react';
import { Link } from "@reach/router";

class SubscribeCard extends Component {

  render() {

    const imageStyle = {
      backgroundImage: `url(${require('../../assets/icons/kaffesmokepink.gif')})`,
      backgroundPosition: '50% 0%',
      backgroundColor: '#E0AB9B',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="subscribeCardWrapper">
        <Link to={`/`}>
          <div className="subscribeCard">
            <div className="imageHere" style={imageStyle}></div>
            <div className="textContentKeepReading">
              <p>Sveriges bästa journalistik!</p>
              <div className="bottomContentSubscribe">
                <h2>Bli prenumerant idag!</h2>
                <p>525 600 min läsning per år</p>
              </div>
            </div>
            <div className="closeKeepReading" >
              <img onClick={this.props.removeTopBannerCard} src={require('../../assets/icons/closeblack.svg')} alt=""/>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SubscribeCard;
