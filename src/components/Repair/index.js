import React, { Component } from 'react';
import iphone from './assets/iphone.png';
import ipad from './assets/ipad.png';
import './style.css';

class Repair extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-repair">
          <a className="box-device">
            <h3>iPhone</h3>
            <img src={iphone} height="200px" />
          </a>
          <a className="box-device">
            <h3>iPad</h3>
            <img src={ipad} height="200px" />
          </a>
        </div>
      </div>
    );
  }
}

export default Repair;
