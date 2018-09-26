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
            <h2>
              {article.fields.title}
            </h2>
          </div>
        </Link>
      </div>
    )
  }
}

export default LargeCard;
