import React, { Component } from 'react';
import './App.css';

import Profile from './components/profile'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div className="App">

          <Profile/>
          <Skills/>

      </div>
    );
  }
}

export default App;
