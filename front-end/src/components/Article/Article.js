import React, { Component } from 'react';

class Article extends Component {

state = {
  article: false,
  scrollPercentage: 0,
}

onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        localStorage.setItem('scrollLatest', Math.floor(n * 100));
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
          localStorage.setItem('latestArticle', JSON.stringify(this.state.article));
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
      localStorage.setItem('keepReading', JSON.stringify(this.props.articleId));
      window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
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
