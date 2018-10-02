import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Archive from '../Archive/Archive';
import ReadList from '../ReadList/ReadList';
import Article from '../Article/Article';
import { Router } from "@reach/router";

class App extends Component {


  state = {
    articles: false,
    latestArticle: false,
    switchMode: true,
  }

  componentDidUpdate () {
    window.scrollTo(0, 0);
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
    switchMode = () => {
      this.setState({switchMode: !this.state.switchMode});
    }

  render() {
    const {articles, latestArticle, switchMode} = this.state;

    return (
      <div className="App" style={{backgroundColor: switchMode ? "#FFF" : "#000"}}>
        <Navbar switchModeChange={this.switchMode} switchMode={this.state.switchMode}/>
        <Router>
          <Landing articles={articles} latestArticle={latestArticle} path="/" />
          <Archive articles={articles} path="/arkiv"/>
          <ReadList articles={articles} path="/laslista" />
          <Article articles={articles} latestArticle={latestArticle} path="/article/:articleId" />
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
