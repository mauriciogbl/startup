import React from 'react';
import { Link } from 'react-router';

class Application extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    console.log('props en app',this.props.movies)
    return (
      <div>
        <Link to="/add"className="links">Add</Link>
        <Link to="/list" className="links">List</Link>
      </div>
    );
  }
};

export default Application
