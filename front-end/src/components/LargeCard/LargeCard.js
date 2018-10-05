import React, { Component } from 'react';
import { Link } from '@reach/router';
import CategoryBox from '../CategoryBox/CategoryBox';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';

class LargeCard extends Component {
  render() {

    const {article} = this.props;

    const imageStyle = {
      backgroundImage: `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="largeCardWrapper" style={imageStyle}>
        <div className="addToList">
          <div className="categoryTags">
            <div className="tag"><CategoryBox category={article.fields.category}/></div>
            <div className="tag"><CategoryBox category={`#${article.fields.number}`}/></div>
          </div>
          <SaveArticleIcon />
        </div>
        <Link className="Link" to={`/article/${article.ID}`}>
          <div className="largeCardContent" >
            <div className="contentText">
              <div className="topContent">
                <h2>{article.fields.title}</h2>
                <p>20 minuters läsning</p>
              </div>
              <p>{article.fields.ingress}</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default LargeCard;
