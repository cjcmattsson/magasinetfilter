import React, { Component } from 'react';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';

class ReadList extends Component {

  render() {

    const {articles} = this.props;
    return (
      <div className="readList">
        <select>
          <option value="min läslista">Min läslista</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="min läslista">Min läslista</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        {articles && articles.map(article =>
          <SmallBannerCard markedSaved={true} key={article.ID} article={article} />)}
      </div>
    )
  }
}

export default ReadList;
