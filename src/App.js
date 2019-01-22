import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Repair from './components/Repair';
import "./App.css";
import Device from './components/Device';
import Home from './components/Home';

const pages = {
  home: 'home',
  device: 'device',
  repair: 'repair',
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      activePage: pages.home
    }
  }

  setPage = (page) => {
    this.setState({
      activePage: page
    })
  };

  render() {

    let currentPage = null;
    if (this.state.activePage === pages.home) {//homepage
      currentPage = <Home />
    } else if (this.state.activePage === pages.repair) { // repair
      currentPage = <Repair />
    } else if (this.state.activePage === pages.device) { // repair
      currentPage = <Device />
    }


    return (
      <div>
        <Header setPage={this.setPage} currentPage={this.state.activePage} />
        <Repair />
        <button onClick={() => this.setPage(pages.home)}>Home</button>
        <button onClick={() => this.setPage(pages.repair)}>Repair</button>
        <button onClick={() => this.setPage(pages.device)}>Device</button>
        {/* <Header setPage={this.setPage} currentPage={this.state.activePage} /> */}
        {currentPage}
        <Footer />
      </div>
    );
  }
}

export default App;
