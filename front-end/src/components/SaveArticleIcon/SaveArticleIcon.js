import React, { Component } from 'react';

class SaveArticleIcon extends Component {

  state = {
    saveArticle: false,
  }

  saveArticle = () => {
    this.setState({saveArticle: !this.state.saveArticle})
  }

  render() {
    return (
        <div className="saveArticleIcon" onClick={this.saveArticle}>
            <img onClick={this.saveArticle} src={this.state.saveArticle ? require('../../assets/icons/icon_pink_saved.svg') : require('../../assets/icons/icon_pink_save.svg')} alt=""/>
        </div>
      );
    }
  }

export default SaveArticleIcon;
