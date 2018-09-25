import React, { Component } from 'react';
import { Link } from "@reach/router";

class BannerCard extends Component {
  render() {
    return (
      <div className="bannerCardWrapper">
        <Link to={`/article/${this.props.latestArticle.ID}`}>
          <div className="bannerCard">
            <h1>{this.props.latestArticle.fields.title}</h1>
          </div>
        </Link>
      </div>
    )
  }
}

export default BannerCard;
