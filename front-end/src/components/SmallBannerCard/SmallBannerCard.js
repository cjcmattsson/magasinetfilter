import React, { Component } from 'react';
import { Link } from '@reach/router';

class SmallBannerCard extends Component {


  render() {
    const {article, markedSaved} = this.props;

    const imageStyle = {
      backgroundImage: `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="smallBannerCardWrapper">
        <Link to={`/article/${article.ID}`}>
          <div className="smallBannerCardContent">
            <div className="smallCardImage" style={imageStyle}></div>
            <div className="smallCardText">
              <h2>{article.fields.title}</h2>
              <p>5 min läsning</p>
            </div>
            <div className="smallCardSave">
              <img src={markedSaved ? require('../../assets/icons/icon_pink_saved.svg') : require('../../assets/icons/icon_pink_save.svg')} alt=""/>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SmallBannerCard;
