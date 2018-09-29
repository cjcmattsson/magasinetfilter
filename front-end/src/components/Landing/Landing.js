import React, { Component } from 'react';
import { Link } from "@reach/router";
import BannerCard from '../BannerCard/BannerCard';
import LargeCard from '../LargeCard/LargeCard';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';
import SmallCard from '../SmallCard/SmallCard';

class Landing extends Component {

  state = {
    latestArticle: false,
  }

componentDidMount() {
  if (localStorage.getItem('latestArticle')) {
    const latestArticle = JSON.parse(localStorage.getItem('latestArticle'));
    this.setState({latestArticle})
  } else {
  const keepReading = JSON.parse(localStorage.getItem('keepReading'));
  fetch(`http://localhost:8888/wp-json/myplugin/v2/article/${keepReading}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          latestArticle: result,
        });
        console.log(this.state.latestArticle);
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }
}

  render() {
    const {articles} = this.props;
    const {latestArticle} = this.state;

    return (
      <div className="Landing">
        {latestArticle && <BannerCard latestArticle={this.state.latestArticle}/>}
        <h2 className="headerRecommended">Rekommenderad läsning för dig</h2>
        <div className="landingLargeCardContainer">
          {articles && articles.map(article =>
            <LargeCard key={article.ID} article={article} />)}
            <div className="moreRecommended">
              <Link to="/arkiv">
                <img src={require('../../assets/icons/closeblack.svg')} alt=""/>
              </Link>
            </div>
        </div>
        <h2 className="mostReadArticles">Mest lästa</h2>
          {articles && articles.map(article =>
            <SmallBannerCard markedSaved={false} key={article.ID} article={article} />)}
        <h2 className="headerRecommended">Senast släppta artiklar</h2>
        <div className="landingSmallCardContainer">
          {articles && articles.map(article =>
            <SmallCard key={article.ID} article={article} />)}
        </div>
      </div>
    );
  }
}

export default Landing;
