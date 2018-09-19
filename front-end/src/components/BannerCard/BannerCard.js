import React, { Component } from 'react';

class BannerCard extends Component {
  render() {
    return (
      <div className="bannerCardWrapper">
        <div className="bannerCard">
          <h1>{this.props.latestArticle.fields.title}</h1>
        </div>
      </div>
    )
  }
}

export default BannerCard;
