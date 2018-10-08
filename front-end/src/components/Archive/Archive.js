import React, { Component } from 'react';
import SmallCard from '../SmallCard/SmallCard';
import ArchiveFilterCategory from '../ArchiveFilterCategory/ArchiveFilterCategory';
import filterCategoryList from '../helpers/filterCategoryList';
import ArchiveSortingCategory from '../ArchiveSortingCategory/ArchiveSortingCategory';
import SearchBar from '../SearchBar/SearchBar';
import FilterCategoryBox from '../FilterCategoryBox/FilterCategoryBox';
import sortingCategoryList from '../helpers/sortingCategoryList.js';

class Archive extends Component {

  state = {
    sort: false,
    filter: false,
    latestArticle: false,
    sortCategory: false,
    chosenFilters: [],
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
    const {sort, filter, sortCategory, chosenFilters} = this.state;
    const {articles, switchMode} = this.props;

    return (
      <div className="archiveWrapper">
        <SearchBar />
        <div className="sortAndFilterFields">
          {sort
            ? <div className="openSortByFieldWrapper">
                <div className="openSortByFieldButton" onClick={this.showSort}>
                  {sortCategory ? sortCategory : "Sortera efter"}
                </div>
                <div className="sortByFieldBoxWrapper">
                  <div className="sortByFieldBox" onClick={this.showSort}>
                    {sortingCategoryList && sortingCategoryList.map((category, key) => {
                      return <div key={key} onClick={() => {
                          this.setState({sortCategory: category.text})
                        }}>
                        <ArchiveSortingCategory key={key} category={category.text}/>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            : <div className="sortByField" style={{borderRadius: filter ? "15px 15px 0 0" : "15px"}} onClick={this.showSort}>
                <p>{sortCategory ? sortCategory : "Sortera efter"}</p>
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
                      return <div key={key} onClick={() => {
                          this.state.chosenFilters.push(category.text)
                          console.log(this.state.chosenFilters);
                        }}>
                        <ArchiveFilterCategory category={category.text}/>
                      </div>
                    })}
                  </div>
                  <h3>Välj läslängd</h3>
                  <div className="filterArticleLength">
                    <ArchiveFilterCategory icon={require('../../assets/icons/arrow_transperant.svg')} category={"20 minuter"}/>
                    <ArchiveFilterCategory icon={require('../../assets/icons/arrow_transperant.svg')} category={"20 minuter"}/>
                  </div>
                  <div className="soundAndButtonArticle">
                    <ArchiveFilterCategory icon={require('../../assets/icons/sound_dark.svg')} category={"Välj inlästa artiklar"}/>
                    <div onClick={this.showFilter} className="button">Välj</div>
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
        {!!chosenFilters.length &&
          <div className="chosenFilters">
            <p style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Valda filter</p>
            <div className="filterList">
              {chosenFilters && chosenFilters.map((filter, key) =>
                <FilterCategoryBox key={key} filterCategory={filter} />)}
            </div>
        </div>}
        <div className="archiveCards">
          {articles && articles.map(article =>
            <SmallCard key={article.ID} article={article} />)}
        </div>
      </div>
    )
  }
}

export default Archive;
