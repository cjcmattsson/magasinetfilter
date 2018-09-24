import React, { Component } from 'react';
import { Link } from "@reach/router";
import BannerCard from '../BannerCard/BannerCard'
class Landing extends Component {

  render() {
    const {articles, latestArticle} = this.props;
    return (
      <div className="Landing">
        <h1>Magasinet Filter</h1>
        {latestArticle && <BannerCard latestArticle={this.props.latestArticle}/>}
        {articles && articles.map(article =>
        <Link key={article.ID} to={`/article/${article.ID}`}>
          <h2>{article.post_title}</h2>
        </Link>)}
      </div>
    );
  }
}

export default Landing;
