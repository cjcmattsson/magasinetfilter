import React, { Component } from 'react';
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard';

class ReadList extends Component {

  state = {
    listTab: true,
    historyTab: false,
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
          <div onClick={this.listTab} className="readListButton" style={{backgroundColor: this.state.listTab ? "#E0AB9B" : ""}}>Min Läslista</div>
          <div onClick={this.historyTab} className="historyButton" style={{backgroundColor: this.state.historyTab ? "#E0AB9B" : ""}}>Historik</div>
        </div>
        {articles && articles.map(article =>
          <SmallBannerCard switchMode={switchMode} markedSaved={true} key={article.ID} article={article} />)}
      </div>
    )
  }
}

export default ReadList;
