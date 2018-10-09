import React, { Component } from 'react';
import CategoryBox from '../CategoryBox/CategoryBox';
import SaveArticleIcon from '../SaveArticleIcon/SaveArticleIcon';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';
import BannerCardNextArticle from '../BannerCardNextArticle/BannerCardNextArticle';
import Paywall from '../Paywall/Paywall';
import Observer from 'react-intersection-observer'
class Article extends Component {

state = {
  article: false,
  scrollPercentage: 0,
  fontChange: false,
  fontSize: 16,
  lineHeight: 23,
  paywallUp: true,
  payWallShowing: true,
  fixTextChange: false,
  dontShowPaywall: false
}

onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        localStorage.setItem('scrollLatest', Math.floor(n * 100));
}


  componentDidMount() {
    const checkIfFree = localStorage.getItem("freeArticle1");
    const checkIfSecondFree = localStorage.getItem("freeArticle2");
    if (checkIfFree === this.props.articleId || checkIfSecondFree === this.props.articleId) {
      console.log(this.props.articleId);
      this.setState({dontShowPaywall: true})
    }
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
      this.setState({
        fontSize: this.state.fontSize + 2,
        lineHeight: this.state.lineHeight + 2,
      })
    }
    decreaseFontSize = () => {
      this.setState({
        fontSize: this.state.fontSize - 2,
        lineHeight: this.state.lineHeight - 2,
      })
    }

    paywallUp = () => {
      this.setState({paywallUp: false,})
      setTimeout(() => {
        this.setState({payWallShowing: false, dontShowPaywall: true})
      }, 1000)
      localStorage.setItem('freeArticle1', this.props.articleId);
    }

    newsletterPaywallUp = () => {
      this.setState({paywallUp: false,})
      setTimeout(() => {
        this.setState({payWallShowing: false, dontShowPaywall: true})
      }, 1000)
      localStorage.setItem('freeArticle2', this.props.articleId);
    }

  render() {
    const {article, paywallUp, dontShowPaywall} = this.state;
    const {articles, switchMode} = this.props;

    const imageStyle = {
      backgroundImage: article && `url(${article.fields.image.url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    const fontSize = {
      fontSize: `${this.state.fontSize}px`,
      lineHeight: `${this.state.lineHeight}px`
    }

    const mainTextStyleOpen = {
      color: switchMode ? "#000000" : "#FFFFFF",
      maxHeight: dontShowPaywall ? "5000px" : "500px",
    }

    const mainTextStyleClosed = {
      color: switchMode ? "#000000" : "#FFFFFF",
      maxHeight: paywallUp ? "500px" : "5000px" ,
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
                <h2>{article.fields.title}</h2>
                <div className="timeAndIngress">
                  <p className="timeOfRead">7 min läsning</p>
                  <p className="ingress">{article.fields.ingress}</p>
                </div>
              </div>
            </div>
            <div className="articleTextWrapper">
              <div className="contentCreators">
                <p style={{color: switchMode ? "#000000" : "#FFFFFF"}}>TEXT {article.fields.author} FOTO {article.fields.photographer}</p>
              </div>

              <div className="listenAndShareIcons">
                <img src={switchMode ? require('../../assets/icons/sound_dark.svg') : require('../../assets/icons/sound_white.svg')} alt=""/>
                <img src={switchMode ? require('../../assets/icons/share_dark.svg') : require('../../assets/icons/share_white.svg')} alt=""/>
              </div>
              <div className="articelMainText" style={dontShowPaywall ? mainTextStyleOpen : mainTextStyleClosed}>
                <p style={fontSize}>{article.fields.text}</p>
                <div className="fontSizeChange" style={{
                    opacity: this.state.fixTextChange ? 0 : 1,
                   }}>
                  <img onClick={this.activateFontChange} src={require('../../assets/icons/textsize_unactive.svg')} alt=""/>
                  <div className="textChangeButtons" style={{display: this.state.fontChange ? "block" : "none"}}>
                    <p onClick={this.increaseFontSize}>+</p>
                    <p onClick={this.decreaseFontSize}>—</p>
                  </div>
                </div>
              </div>
              <Observer rootMargin={"10000px 0px 0px 0px"} onChange={inView => {
                  if (inView) {
                    this.setState({fixTextChange: true})
                  } else {
                    this.setState({fixTextChange: false})
                  }
                }
                }>
                {({ inView, ref }) => (
                  <div ref={ref}>
              {dontShowPaywall ?
                <div></div>
                :
                <div className="overlay" style={{background: switchMode ? "linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))" : "linear-gradient(rgba(45, 45, 45, 0), rgb(45, 45, 45))"}}></div>
          }
            </div>
          )}
        </Observer>
        {!this.state.dontShowPaywall &&
          <div>
            {this.state.payWallShowing && <Paywall
              switchMode={switchMode}
              paywallUp={this.paywallUp}
              newsletterPaywallUp={this.newsletterPaywallUp}
              />
          }
          </div>}
            </div>

                <div className="afterArticleContent">
                  <BannerCardNextArticle/>
                  <div className="similarReading">
                    <h2 style={{color: switchMode ? "#000000" : "#FFFFFF"}}>Liknande läsning</h2>
                    {articles && articles.map(article =>
                      <SmallBannerCard switchMode={switchMode} key={article.ID} article={article} />)}
                      </div>
                    </div>

          </div>
        }
        </div>
      );
    }
  }

export default Article;
