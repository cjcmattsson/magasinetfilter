import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Article extends Component {

state = {
  articles: false,
  article: false,
  articleId: false,
}

  componentDidMount() {
    const articleId = parseInt(this.props.match.params.articleId);
    if (localStorage.getItem('articles')) {
      const articles = JSON.parse(localStorage.getItem('articles'));
      const article = articles.find(article => article.ID === articleId);
      this.setState({article})
    } else {
        fetch(`http://localhost:8888/wp-json/myplugin/v2/articles`)
          .then(res => res.json())
          .then(
            (result) => {
              const article = result.find(item => item.ID === articleId);
              this.setState({
                articles: result,
                article: article,
              });
              localStorage.setItem('articles', JSON.stringify(result));
              console.log(result);
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
    const {article} = this.state;
    return (
      <div className="Article">
        <Navbar/>
        {article &&
          <div>
          <h1>{article.fields.title}</h1>
          <h2>{article.fields.ingress}</h2>
          <img src={article.fields.image.url} alt=""/>
          </div>
        }
        </div>
      );
    }
  }

export default Article;
