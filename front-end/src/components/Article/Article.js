import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Article extends Component {

state = {
  article: false,
}

  componentDidMount() {
    fetch(`http://localhost:8888/wp-json/myplugin/v2/article/${this.props.articleId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            article: result,
          });
          console.log(this.state.article);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }

  render() {
    const {article} = this.state;
    return (
      <div className="article">
        {article &&
          <div>
            <h1>{article.fields.title}</h1>
            <h2>{article.fields.ingress}</h2>
            <h3>{article.fields.text}</h3>
          </div>}
        </div>
      );
    }
  }

export default Article;
