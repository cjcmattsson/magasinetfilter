import React, { Component } from 'react';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';

class ReadList extends Component {

  render() {

    const {articles} = this.props;
    return (
      <div className="readList">
        {articles && articles.map(article =>
          <SmallBannerCard markedSaved={true} key={article.ID} article={article} />)}
      </div>
    )
  }
}

export default ReadList;
