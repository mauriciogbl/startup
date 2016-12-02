import React from 'react';
import { Link } from 'react-router';
import Add from './add';
import List from './list';

class Application extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Link to="/add" className="links">Add</Link>
        <Link to="/list" className="links">List</Link>
        <Add actions={this.props.actions} movies={this.props.movies}/>
        <List movies={this.props.movies}/>
      </div>
    );
  }
};

export default Application
