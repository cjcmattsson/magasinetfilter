import React, { Component } from 'react';
import { Link } from '@reach/router';

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
      <div className="largeCardWrapper">
        <Link className="Link" to={`/article/${article.ID}`}>
          <div className="largeCardContent" style={imageStyle}>
            <div className="addToList">
              <div className="category">Kultur</div>
              <img src={require('../../assets/icons/icon_pink_save.svg')} alt=""/>
            </div>
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
