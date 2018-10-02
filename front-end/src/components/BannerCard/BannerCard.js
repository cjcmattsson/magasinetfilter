import React, { Component } from 'react';
import { Link } from "@reach/router";

class BannerCard extends Component {

  closeKeepReading = () => {
    localStorage.removeItem('keepReading');
    localStorage.removeItem('latestArticle');
  }

  render() {

    const {latestArticle} = this.props;
    const scrollLatest = localStorage.getItem('scrollLatest')
    const progressBar = {
      width: `${scrollLatest}%`
    }

    const imageStyle = {
      backgroundImage: `url(${latestArticle.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="bannerCardWrapper">
        <Link to={`/article/${latestArticle.ID}`}>
          <div className="bannerCard">
            <div className="imageHere" style={imageStyle}></div>
            <div className="textContentKeepReading">
              <p>Fortsätt där du slutade</p>
              <h2>{this.props.latestArticle.fields.title}</h2>
              <p>15 min läsning</p>
              <div className="progressBarKeepReading">
                <div className="progress" style={progressBar}></div>
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
