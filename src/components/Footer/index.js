import React, { Component } from 'react';
import Cities from '../Cities';

class Footer extends Component {

  constructor(){
    super();
    this.state = {
      areas: [
        'San Jose', 'Santa Clara', 'Sunnyvale', 'Belmont', 'Pacifica',
        'Bishkek'
      ]
    }
  }

  render() {

    return (
      <div>
        <h1>Footer</h1>
        {this.state.areas.map(city => <Cities city={city} />)}
      </div>
    );
  }
}

export default Footer;
