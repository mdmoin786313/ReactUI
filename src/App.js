import React, { Component } from 'react';

import Header from './components/headerComponent/Header.js';
import ContentTop from './components/contentTop/ContentTop.js';
import './Assets/scss/new.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentTop />
      </div>
    );
  }
}

export default App;