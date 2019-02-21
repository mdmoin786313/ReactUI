import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="" className="logo">NetHosting</a>
        <div className="header-links">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Pricing</a>
            <a href="">Business</a>
            <a href="">SignUp!</a>
        </div>
      </div>
    );
  }
}

export default Header;