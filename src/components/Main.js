require('styles/App.css');

import React from 'react';
import InterestGrid from './InterestGrid';

import AppBar from 'material-ui/AppBar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Interests" />
        <InterestGrid {...this.props} />
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;
