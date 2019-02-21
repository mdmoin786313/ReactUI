import React, { Component } from 'react';

import Header from './components/headerComponent/Header.js';
import './Assets/scss/new.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;