import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="" className="logo">NetHosting</a>
        <div className="header-links">
            <a href="">Home</a>
            <a href="">Domains</a>
            <a href="">Hosting</a>
            <a href="">VPS</a>
            <a href="" id="price">Pricing</a>
            <a href="">Business</a>
            <a href="">Support</a>
            <a href="">SignUp!</a>
        </div>
        <div className="pricing-list">
            <div className="pricing-list-part">
              <h3>Node.js Hosting Plan</h3>
              <div className="line"></div>
              <h1>&#8377;599/m</h1>
              <h4>Great Start For Single Node Site!</h4>
              <ul style={{textAlign: "left"}}>
                <li>1 Website</li>
                <li>Unlimited Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>10 MySQL DB (1GB each)</li>
                <li>Free cPanel</li>
                <li>Free SSl and SSD</li>
                <li>Free and Easy Site Transfer</li>
                <li>Turbo</li>
              </ul>
            </div>
            <div className="pricing-list-part">
              <h3>AngularJS Hosting Plan</h3>
              <div className="line"></div>
              <h1>&#8377;499/m</h1>
              <h4>Great Start For Single Angular Site!</h4>
              <ul style={{textAlign: "left"}}>
                <li>1 Website</li>
                <li>Unlimited Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>10 MySQL DB (1GB each)</li>
                <li>Free cPanel</li>
                <li>Free SSl and SSD</li>
                <li>Free and Easy Site Transfer</li>
                <li>Turbo</li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;