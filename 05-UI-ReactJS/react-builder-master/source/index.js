import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Application from './components/application';
import AddMovie from './containers/addMovie';
import List from './containers/listMovies';
import moviesStore from '../source/components/moviesStore';

const appRoute = document.getElementById('app');
 ReactDOM.render(
  <Provider store={moviesStore}>
    <Router history={hashHistory}>
      <Route path='/' component={Application}/>
      <Route path='/add' component={AddMovie}/>
      <Route path='/add/:idxMovie' component={AddMovie}/>
      <Route path='/list' component={List}/>
    </Router>
  </Provider>,
  appRoute
)

const NotFound = () => (
 <h1>404.. Page not found!</h1>);
