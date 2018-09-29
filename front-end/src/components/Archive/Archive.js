import React, { Component } from 'react';
import SmallCard from '../SmallCard/SmallCard';

class Archive extends Component {

  render() {
    const {articles} = this.props;
    return (
      <div className="archiveWrapper">
      <h1>Arkiv</h1>
        <div className="archiveCards">
          {articles && articles.map(article =>
            <SmallCard key={article.ID} article={article} />)}
        </div>
      </div>
    )
  }
}

export default Archive;
