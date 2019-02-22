import React, { Component } from 'react';
import logo from "./images/logo.png";

class Backg1Component extends Component {
  render() {
    return (
      <div className="Backg1Component">
        <div className="content">
            <table cellPadding={15}>
                <tr>
                    <td><img src={logo} className="logo-img" alt="Logo" /></td>
                    <td>
                        <div className="content-data">
                            <h1 className="headlogo">World's No. 1 Hosting Service</h1>
                            <h4>Host your Node, Angular, MySQL and so much types of WebApps along with our 30 Million Users over our server.</h4>
                            <div className="server">
                                <h5>Node.js</h5>
                                <h5>Apache</h5>
                                <h5>AngularJS</h5>
                            </div>
                            <a href="" className="getStarted">Get Started!</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
      </div>
    );
  }
}

export default Backg1Component;