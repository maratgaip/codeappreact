import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  render() {
    return (
      <div>
        <h1>Header</h1>
        <div><small>Fixinity / {this.props.currentPage} / <span onClick={() => this.props.setPage('device')}>Device</span> / Profile</small></div>
      </div>
    );
  }
}

Header.propTypes = {
  currentPage: PropTypes.string,
  setPage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentPage: 'HOMEPAGE'
};

export default Header;
