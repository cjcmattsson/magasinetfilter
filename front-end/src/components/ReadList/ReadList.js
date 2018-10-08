import React, { Component } from 'react';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';

class ReadList extends Component {

  state = {
    listTab: true,
    historyTab: false,
  }
  componentWillReceiveProps () {
      let element = this;
      if (element != null) {
        this.scrollPosition = window.scrollY
      }
    }

    componentDidUpdate () {
      let element = this;
      if (element != null) {
        window.scrollTo(0, this.scrollPosition)
      }
    }

  componentDidMount() {
    if (localStorage.getItem('latestArticle')) {
      const latestArticle = JSON.parse(localStorage.getItem('latestArticle'));
      this.setState({latestArticle})
    } else {
      this.setState({latestArticle : false,})
    }
  }

    listTab = () => {
      this.setState({listTab: true, historyTab: false})
    }
    historyTab = () => {
      this.setState({listTab: false, historyTab: true})
    }

  render() {

    const {articles, switchMode} = this.props;
    return (
      <div className="readListWrapper">
        <div className="readListHistoryButtons">
          <div onClick={this.listTab} className="readListButton" style={{backgroundColor: this.state.listTab ? "#E0AB9B" : ""}}>Min läslista</div>
          <div onClick={this.historyTab} className="historyButton" style={{backgroundColor: this.state.historyTab ? "#E0AB9B" : ""}}>Historik</div>
        </div>
        {articles && articles.map(article =>
          <SmallBannerCard leftToRead={true} switchMode={switchMode} markedSaved={true} key={article.ID} article={article} />)}
        {articles && articles.map(article =>
          <SmallBannerCard leftToRead={true} switchMode={switchMode} markedSaved={true} key={article.ID} article={article} />)}
      </div>
    )
  }
}

export default ReadList;
