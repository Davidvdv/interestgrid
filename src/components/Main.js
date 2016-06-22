require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import InterestGrid from './InterestGrid';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Interests</h1>
        <InterestGrid {...this.props} />
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;
