import React, { Component } from 'react';
import SmallCard from '../SmallCard/SmallCard';

class Archive extends Component {

  render() {
    const {articles} = this.props;

    const searchIcon = {
      backgroundImage: `url(${require('../../assets/icons/search_dark.svg')})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '5% 50%',
    }

    return (
      <div className="archiveWrapper">
        <div className="searchFieldWrapper" style={searchIcon}>
          <input className="searchFieldInput" type="text" placeholder="Sök" />
        </div>
        <div className="sortAndFilterFields">
          <div className="sortByField">
            <p>Sortera efter</p>
            <img src={require('../../assets/icons/arrow_transperant.svg')} alt=""/>
          </div>
          <div className="filterByField">
            <p>Filtrera på</p>
            <img src={require('../../assets/icons/arrow_transperant.svg')} alt=""/>
          </div>
        </div>
        <div className="archiveCards">
          {articles && articles.map(article =>
            <SmallCard key={article.ID} article={article} />)}
        </div>
      </div>
    )
  }
}

export default Archive;
