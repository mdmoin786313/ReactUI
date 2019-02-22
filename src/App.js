import React, { Component } from 'react';

import Header from './components/headerComponent/Header.js';
import Backg1Component from './components/backg1Component/Backg1Component.js';
import './Assets/scss/new.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Backg1Component />
      </div>
    );
  }
}

export default App;