import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './containers/app';
import Add from './components/add';
import List from './components/list';
import moviesApp from './reducers/reducers';

export const moviesStore = createStore(moviesApp)
const appRoute = document.getElementById('app');
 ReactDOM.render(
  <Provider store={moviesStore}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/add' component={Add}> </Route> 
        <Route path='/add/(:idxMovie)' component={Add}> </Route>
        <Route path='/list' component={List}> </Route>
      </Route>
    </Router>
  </Provider>,
  appRoute
)

const NotFound = () => (
 <h1>404.. Page not found!</h1>);
