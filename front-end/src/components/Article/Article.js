import React, { Component } from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';
import SubscribeCard from '../SubscribeCard/SubscribeCard';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';
import Paywall from '../Paywall/Paywall';
class Article extends Component {

state = {
  article: false,
  scrollPercentage: 0,
  fontChange: false,
  fontSize: 20,
  paywallUp: true,
}

onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        localStorage.setItem('scrollLatest', Math.floor(n * 100));
}


  componentDidMount() {
      const thisArticle = JSON.parse(localStorage.getItem(this.props.articleId));
      this.setState({article: thisArticle})
      console.log(thisArticle);
      fetch(`http://localhost:8888/wp-json/myplugin/v2/article/${this.props.articleId}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            article: result,
          });
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

    goBack = () => {
      window.history.back();
    }

    activateFontChange = () => {
      this.setState({fontChange : !this.state.fontChange})
    }

    increaseFontSize = () => {
      this.setState({fontSize: this.state.fontSize + 2})
    }
    decreaseFontSize = () => {
      this.setState({fontSize: this.state.fontSize - 2})
    }

    getOneFreeArticle = () => {
      this.setState({paywallUp: true})
    }

    paywallUp = () => {
      this.setState({paywallUp: false})
      localStorage.setItem('freeArticle', 1);
    }

  render() {
    const {article, paywallUp} = this.state;
    const {articles, switchMode} = this.props;

    const imageStyle = {
      backgroundImage: article && `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    const fontSize = {
      fontSize: `${this.state.fontSize}px`,
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
                  <img onClick={this.goBack} src={require('../../assets/icons/closewhite.svg')} alt=""/>
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
                <p style={{color: switchMode ? "#000000" : "#FFFFFF"}} >TEXT {article.fields.author} FOTO {article.fields.photographer}</p>
              </div>

              <div className="listenAndShareIcons">
                <img src={switchMode ? require('../../assets/icons/sound_dark.svg') : require('../../assets/icons/sound_white.svg')} alt=""/>
                <img src={switchMode ? require('../../assets/icons/share_dark.svg') : require('../../assets/icons/share_white.svg')} alt=""/>
              </div>
              <div className="articelMainText" style={{
                  color: switchMode ? "#000000" : "#FFFFFF",
                  height: paywallUp ? "500px" : "auto",
                  overflow: paywallUp ? "hidden" : "visible",
                }}>
                <p style={fontSize}>{article.fields.text}</p>
              </div>
              {paywallUp && <div className="overlay" style={{background: switchMode ? "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))" : "linear-gradient(rgba(45, 45, 45, 0), rgb(45, 45, 45))"}}></div>}
              {paywallUp && <Paywall switchMode={switchMode} paywallUp={this.paywallUp}/>}
            </div>
            <div className="afterArticleContent">
              <SubscribeCard/>
              <div className="similarReading">
                <h2 style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Liknande läsning</h2>
                  {articles && articles.map(article =>
                    <SmallBannerCard switchMode={switchMode} markedSaved={true} key={article.ID} article={article} />)}
              </div>
            </div>
          </div>
        }
          <div className="fontSizeChange">
            <img onClick={this.activateFontChange} src={require('../../assets/icons/textsize_unactive.svg')} alt=""/>
            <div className="textChangeButtons" style={{display: this.state.fontChange ? "block" : "none"}}>
              <p onClick={this.increaseFontSize}>+</p>
              <p onClick={this.decreaseFontSize}>—</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default Article;
