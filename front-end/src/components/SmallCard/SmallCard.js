import React, { Component } from 'react';
import { Link } from '@reach/router';
import CategoryBox from '../CategoryBox/CategoryBox';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';



class SmallCard extends Component {


  render() {

    const {article} = this.props;

    const imageStyle = {
      backgroundImage: `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="smallCardWrapper" style={imageStyle}>
        <div className="topContent">
          <CategoryBox category={article.fields.category}/>
          <SaveArticleIcon />
        </div>
        <Link className="Link" to={`/article/${article.ID}`}>
          <div className="smallCardContent" >
            <div className="bottomText">
              <h2>{article.fields.title}</h2>
              <p>5 min läsning</p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SmallCard;
