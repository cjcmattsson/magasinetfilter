import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import Arcive from '../Arcive/Arcive';
import ReadList from '../ReadList/ReadList';
import Article from '../Article/Article';
import { Router } from "@reach/router";

class App extends Component {


  state = {
    articles: false,
    latestArticle: false,
  }

  componentDidMount() {
    if (localStorage.getItem('articles')) {
      const articles = JSON.parse(localStorage.getItem('articles'));
      this.setState({articles})
    } else {
        fetch(`http://localhost:8888/wp-json/myplugin/v2/articles`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                articles: result,
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

        if (localStorage.getItem("latestArticle")) {
          const articles = JSON.parse(localStorage.getItem('articles'));
          const latestArticle = articles.find(article => article.ID === parseInt(localStorage.getItem('latestArticle')));
          this.setState({latestArticle})
        }
    }

  render() {
    const {articles, latestArticle} = this.state;

    return (
      <div className="App">
        <Navbar/>
        <Router>
          <Landing articles={articles} latestArticle={latestArticle} path="/" />
          <Arcive articles={articles} path="/arkiv"/>
          <ReadList path="/laslista" />
          <Article path="/article/:articleId" />
        </Router>
      </div>
    );
  }
}

export default App;
