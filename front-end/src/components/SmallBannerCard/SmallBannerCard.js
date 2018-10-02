import React, { Component } from 'react';
import { Link } from '@reach/router';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';


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
          <div className="smallBannerCardContent">
            <Link to={`/article/${article.ID}`}>
            <div className="smallCardImage" style={imageStyle}></div>
            <div className="smallCardText">
              <h2>{article.fields.title}</h2>
              <p>5 min läsning</p>
            </div>
          </Link>
            <div className="smallCardSave">
              <SaveArticleIcon />
            </div>
          </div>
      </div>
    )
  }
}

export default SmallBannerCard;
