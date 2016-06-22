import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import store, {history} from './stores';
import ConnectComponent from './containers/App';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ConnectComponent}></Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('app')
);
