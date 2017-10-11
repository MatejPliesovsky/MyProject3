import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import Index from './index.jsx';
import MainPage from './pages/index.page.jsx';


const target = document.getElementById('app');
const node = <Router history={browserHistory}>
  <Route path="/" component={MainPage}>
    <Route path="index" component={Index}/>
  </Route>
</Router>;

ReactDOM.render(node, target);
