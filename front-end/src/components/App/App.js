import React, { Component } from 'react';
import './App.css';

class App extends Component {


  state = {
    article: false,
    id: 5
  }



  componentDidMount() {
    fetch(`http://localhost:8888/wp-json/myplugin/v2/article/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            article: result,
          });
          console.log(result);
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }

  render() {


    return (
      <div className="App">
        {this.state.article ?
          <h1>{this.state.article.post_name}</h1> :
          <h1>shit!!</h1> }
      </div>
    );
  }
}

export default App;
