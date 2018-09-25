import React, { Component } from 'react';
import { Link } from "@reach/router";
import BannerCard from '../BannerCard/BannerCard';
import LargeCard from '../LargeCard/LargeCard';

class Landing extends Component {

  state = {
    latestArticle: false,
  }

componentDidMount() {
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

  render() {
    const {articles} = this.props;
    const {latestArticle} = this.state;

    return (
      <div className="Landing">
        {latestArticle && <BannerCard latestArticle={this.state.latestArticle}/>}
        <h2>Rekommenderad läsning för dig</h2>
        {articles && articles.map(article =>
          <LargeCard key={article.ID} article={article} />)}
      </div>
    );
  }
}

export default Landing;
