import React, { Component } from 'react';
import { Link } from "@reach/router";
import BannerCard from '../BannerCard/BannerCard';
import SubscribeCard from '../SubscribeCard/SubscribeCard';
import LargeCard from '../LargeCard/LargeCard';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';
import SmallCard from '../SmallCard/SmallCard';

class Landing extends Component {

  state = {
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

  render() {
    const {articles, switchMode} = this.props;
    const {latestArticle} = this.state;

    return (
      <div className="landingWrapper">
        {latestArticle ? <BannerCard latestArticle={this.state.latestArticle}/> : <SubscribeCard />}
        <h2 className="headerRecommended" style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Rekommenderad läsning för dig</h2>
        <div className="landingLargeCardContainer">
          {articles && articles.map(article =>
            <LargeCard key={article.ID} article={article} />)}
            <div className="moreRecommended">
              <Link to="/arkiv">
                <img src={require('../../assets/icons/closeblack.svg')} alt=""/>
              </Link>
            </div>
        </div>
        <div className="mostReadArticlesContainer">
          <h2 className="mostReadArticles" style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Populära artiklar</h2>
          {articles && articles.map(article =>
            <SmallBannerCard markedSaved={false} switchMode={switchMode} key={article.ID} article={article} />)}
        </div>
        <div className="landingSmallCardContainer">
          <h2 className="headerLatestArticles" style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Senast släppta artiklar</h2>
          {articles && articles.map(article =>
            <SmallCard key={article.ID} article={article} />)}
        </div>
      </div>
    );
  }
}

export default Landing;
