import React, { Component } from 'react';
import { Link } from '@reach/router';

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
      <div className="smallCardWrapper">
        <Link className="Link" to={`/article/${article.ID}`}>
          <div className="smallCardContent" style={imageStyle}>
            <div className="topContent">
              <div className="smallCardCategory">Kultur</div>
              <img src={require('../../assets/icons/icon_pink_save.svg')} alt=""/>
            </div>
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
