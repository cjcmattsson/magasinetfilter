import React, { Component } from 'react';

class SocialMediaLogos extends Component {

  render() {
    return (
      <div className="socialMediaLogos">
        <img className="socialMediaLogo" src={require('../../assets/icons/facebook.svg')} alt=""/>
        <img className="socialMediaLogo" src={require('../../assets/icons/social_media_twitter.svg')} alt=""/>
        <img className="socialMediaLogo" src={require('../../assets/icons/social_media_instagram.svg')} alt=""/>
      </div>
    )
  }
}

export default SocialMediaLogos;
