import React, { Component } from 'react';
import { Link } from '@reach/router';

class LargeCard extends Component {
  render() {
    const {article} = this.props
    return (
      <div className="largeCardWrapper">
        <Link className="Link" to={`/article/${article.ID}`}>
          <div className="largeCardContent">
            {article.fields.title}
          </div>
        </Link>
      </div>
    )
  }
}

export default LargeCard;
