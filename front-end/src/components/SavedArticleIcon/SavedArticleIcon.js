import React, { Component } from 'react';

class SavedArticleIcon extends Component {

  state = {
    saveArticle: false,
  }

  saveArticle = () => {
    this.setState({saveArticle: !this.state.saveArticle})
  }

  render() {

    return (
        <div className="savedArticleIcon" onClick={this.saveArticle}>
            <img onClick={this.saveArticle} src={this.state.saveArticle ? require('../../assets/icons/icon_pink_save.svg') : require('../../assets/icons/icon_pink_saved.svg')} alt=""/>
        </div>
      );
    }
  }

export default SavedArticleIcon;
