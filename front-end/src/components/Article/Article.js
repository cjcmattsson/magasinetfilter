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
  dontShowPaywall: false,
}

onScroll = () => {
        const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
        const n = scrollTop / (scrollHeight - clientHeight);
        localStorage.setItem('scrollLatest', Math.floor(n * 100));
}


  componentDidMount() {
    if (!localStorage.getItem('scrollLatest')) {
      localStorage.setItem('scrollLatest', 0)
    }
    const checkIfFree = localStorage.getItem("freeArticle1");
    const checkIfSecondFree = localStorage.getItem("freeArticle2");
    if (checkIfFree === this.props.articleId || checkIfSecondFree === this.props.articleId) {
      this.setState({dontShowPaywall: true})
    }
      const thisArticle = JSON.parse(localStorage.getItem(this.props.articleId));
      this.setState({article: thisArticle})
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
                <p style={fontSize}>
                  Lumbiafängelsets rastgård saknar tak och solen gassar från en öppen himmel. Hettan är olidlig.
                </p>
                <br/>
                <p style={fontSize}>
                  34-årige Andreas Solemo och 29-årige Stefan Cederholm tränger ihop sig på en tunn träbänk i det överbefolkade fängelset i Cayagan de Oro. Båda har tappat tio kilo under den tid de suttit häktade för ett brott som ger livstids fängelse.
                </p>
                <br/>
                <p style={fontSize}>
                  Lumbiafängelsets rastgård saknar tak och solen gassar från en öppen himmel. Hettan är olidlig.
                </p>
                <br/>
                <p style={fontSize}>
                  34-årige Andreas Solemo och 29-årige Stefan Cederholm tränger ihop sig på en tunn träbänk i det överbefolkade fängelset i Cayagan de Oro. Båda har tappat tio kilo under den tid de suttit häktade för ett brott som ger livstids fängelse.
                </p>
                <br/>
                <p style={fontSize}>
                  Andreas är brunbränd med två dagars skäggstubb, talför och nyfiken. Under de tio månader som gått har han enligt vakterna blivit »helt okej« på gitarr och bra på basket.
                </p>
                <img className="articleImage" src={require('../../assets/icons/promoe-text.jpg')} alt=""/>
                <p style={fontSize}>
                  – Är man 1,94 kan man dunka, konstaterar Andreas.
                </p>
                <br/>
                <p style={fontSize}>
                  Stefan är blekare, orakad, misstänksam och ser ut att ha lidit mer av fängelsevistelsen. Han föredrar att gå »runt, runt, runt«, berättar vakterna.
                </p>
                <br/>
                <p style={fontSize}>
                  Artiklarna i svensk press om att de pressat minderåriga att onanera framför webbkameror har tagit hårt, liksom anklagelsen om människohandel.
                </p>
                <br/>
                <p style={fontSize}>
                  – Människohandel för mig är när ryssar för mexikaner över gränsen till USA för slavarbete, säger Andreas. Att använda den lagstiftningen på oss är helt jävla fuckat.
                </p>
                <br/>
                <p style={fontSize}>
                  Lumbiafängelsets rastgård saknar tak och solen gassar från en öppen himmel. Hettan är olidlig.
                </p>
                <br/>
                <p style={fontSize}>
                  34-årige Andreas Solemo och 29-årige Stefan Cederholm tränger ihop sig på en tunn träbänk i det överbefolkade fängelset i Cayagan de Oro. Båda har tappat tio kilo under den tid de suttit häktade för ett brott som ger livstids fängelse.
                </p>
                <br/>
                <p style={fontSize}>
                  Andreas är brunbränd med två dagars skäggstubb, talför och nyfiken. Under de tio månader som gått har han enligt vakterna blivit »helt okej« på gitarr och bra på basket.
                </p>
                <img className="articleImage" src={require('../../assets/icons/text-image.jpg')} alt=""/>
                <p style={fontSize}>
                  – Är man 1,94 kan man dunka, konstaterar Andreas.
                </p>
                <br/>
                <p style={fontSize}>
                  Stefan är blekare, orakad, misstänksam och ser ut att ha lidit mer av fängelsevistelsen. Han föredrar att gå »runt, runt, runt«, berättar vakterna.
                </p>
                <br/>
                <p style={fontSize}>
                  Artiklarna i svensk press om att de pressat minderåriga att onanera framför webbkameror har tagit hårt, liksom anklagelsen om människohandel.
                </p>
                <br/>
                <p style={fontSize}>
                  – Människohandel för mig är när ryssar för mexikaner över gränsen till USA för slavarbete, säger Andreas. Att använda den lagstiftningen på oss är helt jävla fuckat.
                </p>
                <br/>
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
