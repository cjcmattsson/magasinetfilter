import React, { Component } from 'react';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';

class ReadList extends Component {

  state = {
    listTab: true,
    historyTab: false,
  }

  componentWillReceiveProps () {
      const element = this;
      if (element != null) {
        this.scrollPosition = window.scrollY
      }
    }

    componentDidUpdate () {
      const element = this;
      if (element != null) {
        window.scrollTo(0,0)
      }
    }

    listTab = () => {
      this.setState({listTab: true, historyTab: false})
    }
    historyTab = () => {
      this.setState({listTab: false, historyTab: true})
    }

  render() {

    const {articles} = this.props;
    const {listTab} = this.state;
    return (
      <div className="readListWrapper">
        <div className="readListHistoryButtons">
          <div onClick={this.listTab} className="readListButton" style={{backgroundColor: this.state.listTab ? "#E0AB9B" : ""}}>Min Läslista</div>
          <div onClick={this.historyTab} className="historyButton" style={{backgroundColor: this.state.historyTab ? "#E0AB9B" : ""}}>Historik</div>
        </div>
        {articles && articles.map(article =>
          <SmallBannerCard markedSaved={true} key={article.ID} article={article} />)}
      </div>
    )
  }
}

export default ReadList;
