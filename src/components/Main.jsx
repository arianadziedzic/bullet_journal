// Main component renders login children and deals with logged in/logged out state

import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  render() {
    return (
      <div id="main-component">
        {this.props.children}
      </div>
    );
  }
}

export default Main;

Main.propTypes = propTypes;
