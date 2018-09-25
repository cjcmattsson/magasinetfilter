import React, { Component } from 'react';
import { Link } from "@reach/router";
import BannerCard from '../BannerCard/BannerCard';

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
        {articles && articles.map(article =>
        <Link className="Link" key={article.ID} to={`/article/${article.ID}`}>
          <h2>{article.post_title}</h2>
        </Link>)}
      </div>
    );
  }
}

export default Landing;
