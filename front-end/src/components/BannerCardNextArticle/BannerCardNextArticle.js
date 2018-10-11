import React, { Component } from 'react';
import { Link } from "@reach/router";

class BannerCard extends Component {

  closeKeepReading = () => {
    localStorage.removeItem('keepReading');
    localStorage.removeItem('latestArticle');
  }

  render() {

    const imageStyle = {
      backgroundImage: `url(${require('../../assets/icons/vin-bild.jpg')})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="bannerCardWrapper">
        <Link to={`/`}>
          <div className="bannerCard">
            <div className="imageHere" style={imageStyle}></div>
            <div className="textContentKeepReading">
              <p>Läs nästa artikel</p>
              <div className="bottomContentNextArticle">
                <h2>Tomaten - Hjärnans bästa vän!</h2>
                <p>15 min läsning</p>
              </div>
            </div>
            <div className="closeKeepReading" onClick={this.closeKeepReading}>
              <img src={require('../../assets/icons/closeblack.svg')} alt=""/>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default BannerCard;
