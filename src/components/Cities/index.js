import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cities extends Component {

  render() {

    return (
      <button>
        {this.props.city}
      </button>
    );
  }
}

Cities.propTypes = {
  city: PropTypes.string.isRequired
};

export default Cities;
