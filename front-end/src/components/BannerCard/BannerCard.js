import React, { Component } from 'react';
import { Link } from "@reach/router";

class BannerCard extends Component {
  render() {
    return (
      <div className="bannerCardWrapper">
        <Link to={`/article/${this.props.latestArticle.ID}`}>
          <div className="bannerCard">
            <div className="imageHere"></div>
            <div className="textContentKeepReading">
              <p>Fortsätt där du slutade</p>
              <h1>{this.props.latestArticle.fields.title}</h1>
              <p>15 min läsning</p>
              <div className="progressBarKeepReading"></div>
            </div>
            <div className="closeKeepReading">X</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default BannerCard;
