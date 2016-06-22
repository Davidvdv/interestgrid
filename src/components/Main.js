require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import InterestGrid from './InterestGrid';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>JS interests</h1>
        <InterestGrid {...this.props} />
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;
