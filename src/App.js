import React, { useState } from 'react';

import './App.scss';
import ProgressBar from './components/progressBar'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
          progress: 20,
          size:200,
          strokeWidth:15,
          circleOneStroke: '#d9edfe',
          circleTwoStroke: '#7ea9e1'
    }
  }

render(){
  return (
    <div className="app">
      <div className="app-header">
        <ProgressBar {...this.state}/>
      </div>
    </div>
  );
}
}

export default App;