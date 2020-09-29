import React, { Component } from 'react';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Solution />
        <Score />
        <Letters />
      </div>
    )
  }
}

export default App;
