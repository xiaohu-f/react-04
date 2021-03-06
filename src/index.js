import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import detailApp from '@/layout/detailApp';
import {HashRouter, Route, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path = '/detail' component = {detailApp}></Route>
      <Route path = '/' component = {App}></Route>
    </Switch>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
