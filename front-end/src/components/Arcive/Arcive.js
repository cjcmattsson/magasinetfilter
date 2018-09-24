import React, { Component } from 'react';

class Arcive extends Component {

  render() {
    const {articles} = this.props;
    return (
      <div className="arcive">
      <h1>Arkiv</h1>
        {articles ? articles.map(article =>
          <h2 key={article.ID} onClick={() => {this.goToArticle(article.ID)}}>{article.post_title}</h2>)
            : <div>loading</div>}
      </div>
    )
  }
}

export default Arcive;
