import React, { Component } from 'react';
import { Link } from '@reach/router';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';
import SavedArticleIcon from '../SavedArticleIcon/SavedArticleIcon';
import ProgressBarReadlist from '../ProgressBarReadlist/ProgressBarReadlist';


class SmallBannerCard extends Component {

  render() {
    const {article, switchMode} = this.props;

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
              {this.props.leftToRead ?
                <h2 style={{
                    color: switchMode ? "#000000" : "#FFFFFF",
                    width: "10em",
                    height: "1.2em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>{article.fields.title}</h2>
                :
                <h2 style={{color: switchMode ? "#000000" : "#FFFFFF"}}>{article.fields.title}</h2>
              }
              <p style={{color: switchMode ? "#000000" : "#FFFFFF"}}>5 min läsning</p>
              {this.props.leftToRead &&
                <ProgressBarReadlist/>
                }
            </div>
          </Link>
            <div className="smallCardSave">
              {this.props.markedSaved ? <SavedArticleIcon/> : <SaveArticleIcon />}
            </div>
          </div>
      </div>
    )
  }
}

export default SmallBannerCard;
