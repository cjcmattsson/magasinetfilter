import React, { Component } from 'react';
import { Link } from "@reach/router";

class BannerCard extends Component {

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
          <div className="bannerCard">
            <Link to={`/article/${latestArticle.ID}`}>
            <div className="imageHere" style={imageStyle}></div>
            <div className="textContentKeepReading">
              <p>Fortsätt där du slutade</p>
              <div className="bottomContentKeepReading">
                <h2>{this.props.latestArticle.fields.title}</h2>
                <p>15 min läsning</p>
              </div>
              <div className="progressBarKeepReading">
                <div className="progress" style={progressBar}></div>
              </div>
            </div>
          </Link>
          <div className="closeKeepReading" onClick={this.props.removeTopBannerCard}>
            <img src={require('../../assets/icons/closeblack.svg')} alt=""/>
          </div>
          </div>
      </div>
    )
  }
}

export default BannerCard;
