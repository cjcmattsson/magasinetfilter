import React, { Component } from 'react';

class ProgressBarReadlist extends Component {

  shouldComponentUpdate(nextProps, nextState){
   return false;
  }


  render() {
    return (
        <div className="leftToReadBar">
          <div className="progressBar" style={{
              width: `${Math.floor(Math.random() * 200)}px`,
            }}>
          </div>
        </div>
    )
  }
}

export default ProgressBarReadlist;
