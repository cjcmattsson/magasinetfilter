import React, { Component } from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';
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
    const {article, saveArticle} = this.state;

    const imageStyle = {
      backgroundImage: article && `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className="articleWrapper">
        {article &&
          <div>
            <div className="articleHeader" style={imageStyle}>
              <div className="topContentArticle">
                <div className="categoryAndNumber">
                  <div className="categoryNumberChild"><CategoryBox category={article.fields.category} /></div>
                  <div className="categoryNumberChild"><CategoryBox category={`#${article.fields.number}`} /></div>
                </div>
                <div className="saveAndClose">
                  <SaveArticleIcon />
                  <img src={require('../../assets/icons/closewhite.svg')} alt=""/>
                </div>
              </div>
              <div className="bottomContentArticle">
                <div>
                  <h2>{article.fields.title}</h2>
                  <p>7 min läsning</p>
                </div>
                <h3>{article.fields.ingress}</h3>
              </div>
            </div>
            <div className="articleTextWrapper">
              <div className="contentCreators">
                <p>TEXT {article.fields.author} FOTO {article.fields.author}</p>
              </div>

              <div className="listenAndShareIcons">
                <img src={require('../../assets/icons/sound_dark.svg')} alt=""/>
                <img src={require('../../assets/icons/share_dark.svg')} alt=""/>
              </div>
              <p>{article.fields.text}</p>
            </div>
          </div>}
        </div>
      );
    }
  }

export default Article;
