import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import BannerCard from '../BannerCard/BannerCard';
import './App.css';

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


  goToArticle = (id) => {
    localStorage.setItem('latestArticle', id);
    this.props.history.push({pathname:`/article/${id}`,});
  };

  render() {
    const {articles, latestArticle} = this.state;

    return (
      <div className="App">
        <Navbar/>
        {latestArticle && <BannerCard latestArticle={this.state.latestArticle}/>}
        {articles ? articles.map(article =>
          <h2 key={article.ID} onClick={() => {this.goToArticle(article.ID)}}>{article.post_title}</h2>)
          : <div>loading</div>}
      </div>
    );
  }
}

export default App;
