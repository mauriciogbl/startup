import React from 'react';
import List from './list';
import Add from './add';
import Form from './form'
import { Link } from 'react-router';
import moviesApp from './reducers.js';
import moviesStore from './store';
import { addMovie, editMovie, deleteMovie, initialize } from './actions';

class Application extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <div>
        <Link to="/add" className="links">Add</Link>
        <Link to="/list" className="links">List</Link>
      </div>
    );
  }
};
export default Application
