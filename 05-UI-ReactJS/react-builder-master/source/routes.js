import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Application from './application';
import Add from './add';
import List from './list';
import { Provider } from 'react-redux';
import moviesStore from './store';

class AppRoutes extends Component {

  render() {
    return (
      <Provider store={moviesStore}>
        <Router history={hashHistory}>
          <Route path='/' component={Application} />
          <Route path="/add" component={Add} />
          <Route path="/list" component={List} />
          <Route path='*' component={NotFound} />
        </Router>
      </Provider>
   )
 }
}
const NotFound = () => (
 <h1>404.. Page not found!</h1>);

export default AppRoutes
