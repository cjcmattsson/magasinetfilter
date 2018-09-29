import React, { Component } from 'react';
import SocialMediaLogos from '../SocialMediaLogos/SocialMediaLogos'

class Footer extends Component {

  render() {
    return (
      <div className="footerWrapper">
        <h3>Prenumerera</h3>
        <h3>Nyhetsbrev</h3>
        <h3>Kontakt</h3>
        <SocialMediaLogos/>
      </div>
    )
  }
}

export default Footer;
