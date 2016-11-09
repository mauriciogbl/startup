import React from 'react';
import Application from '../components/application';
import { Link } from 'react-router';
import Button from './button'
import movies from './application'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
    this.renderItem = this.renderItem.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
  }
  editItem() {
    <Item movie={item} index={index} />
  }

  getAllMovies() {
    return this.props.movies.moviesState.map(this.renderItem);
  }

  handleClickDelete(index) {
    this.props.actions.deleteMovie(index)
  }
  renderItem (item, index) {
    let favorite = "Not favorite"
    if (item.fav) {
      favorite = "Favorite";
    }
    return (
      <li className="li" key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} - ${favorite}`}
        <Link to={`add/${index}`}className="link-edit">edit</Link>
        <Button click={this.handleClickDelete.bind(this, index)} clase="link-edit" value="Delete" />
      </li>

    );
  }

  render() {
    console.log('props en list', this.props.movies)
    return (
      <div>
        <Application />
        <h1>List of Movies</h1>
        {this.getAllMovies()}
      </div>
    );
  }
};

export default List
