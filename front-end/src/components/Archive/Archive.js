import React, { Component } from 'react';
import SmallCard from '../SmallCard/SmallCard';
import ArchiveFilterCategory from '../ArchiveFilterCategory/ArchiveFilterCategory';
import filterCategoryList from '../helpers/filterCategoryList';
import ArchiveSortingCategory from '../ArchiveSortingCategory/ArchiveSortingCategory';
import sortingCategoryList from '../helpers/sortingCategoryList.js';

class Archive extends Component {

  state = {
    sort: false,
    filter: false,
    latestArticle: false,
  }

  componentWillReceiveProps () {
      let element = this;
      if (element != null) {
        this.scrollPosition = window.scrollY
      }
    }

    componentDidUpdate () {
      let element = this;
      if (element != null) {
        window.scrollTo(0, this.scrollPosition)
      }
    }

    componentDidMount() {
      if (localStorage.getItem('latestArticle')) {
        const latestArticle = JSON.parse(localStorage.getItem('latestArticle'));
        this.setState({latestArticle})
      } else {
        this.setState({latestArticle : false,})
      }
    }

    showSort = () => {
      this.setState({sort: !this.state.sort, filter: false});
    }
    showFilter = () => {
      this.setState({filter: !this.state.filter, sort: false})
    }

  render() {
    const {sort, filter} = this.state;
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
          {sort
            ? <div className="openSortByFieldWrapper">
                <div className="openSortByFieldButton" onClick={this.showSort}>Sortera efter</div>
                <div className="sortByFieldBoxWrapper">
                  <div className="sortByFieldBox">
                    {sortingCategoryList && sortingCategoryList.map((category, key) => {
                      return <ArchiveSortingCategory key={key} category={category.text}/>
                    })}
                  </div>
                </div>
              </div>
            : <div className="sortByField" style={{borderRadius: filter ? "15px 15px 0 0" : "15px"}} onClick={this.showSort}>
                <p>Sortera efter</p>
                <img src={require('../../assets/icons/arrow_transperant.svg')} alt=""/>
              </div>
            }
          {filter
          ? <div className="openFilterWrapper">
              <div className="openFilterButton" onClick={this.showFilter}>Filtrera på</div>
              <div className="filterByFieldBoxWrapper">
                <div className="filterByFieldBox">
                  <h3>Kategorier</h3>
                  <div className="filterCategoryList">
                    {filterCategoryList && filterCategoryList.map((category, key) => {
                      return <ArchiveFilterCategory key={key} category={category.text}/>
                    })}
                  </div>
                  <h3>Välj läslängd</h3>
                  <div className="filterArticleLength">
                    <ArchiveFilterCategory icon={require('../../assets/icons/arrow_transperant.svg')} category={"20 minuter"}/>
                    <ArchiveFilterCategory icon={require('../../assets/icons/arrow_transperant.svg')} category={"20 minuter"}/>
                  </div>
                  <div className="soundArticle">
                    <ArchiveFilterCategory icon={require('../../assets/icons/sound_dark.svg')} category={"Välj inlästa artiklar"}/>
                  </div>
                </div>
              </div>
            </div>
          : <div className="filterByField" style={{borderRadius: sort ? "15px 15px 0 0" : "15px"}} onClick={this.showFilter}>
              <p>Filtrera på</p>
              <img src={require('../../assets/icons/arrow_transperant.svg')} alt=""/>
            </div>
        }
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
