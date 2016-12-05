import React from 'react';
import { Link } from 'react-router';
import Button from './button';
import Application from './application';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      movies: this.props.movies.moviesState
    }
    this.renderItem = this.renderItem.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
  }

  render() {
    return (
      <div>
        <Application />
        <h1>List of Movies</h1>
        {this.getAllMovies()}
      </div>
    );
  }

  renderItem (item, index) {
    let favorite = "Not favorite";
    item.fav ? favorite = "Favorite" : favorite = "Not favorite";
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} - ${favorite}`}
        <Link to={`add/${index}`}>edit</Link>
        <Button click={this.handleClickDelete.bind(this, index)} value="Delete" />
      </li>
    );
  }


  editItem() {
    <Item movie={item} index={index} />
  }

  handleClickDelete(index) {
    this.props.actions.deleteMovie(index);
    this.setState({movies: this.props.movies})
  }

  getAllMovies() {
    return this.props.movies.moviesState.map(this.renderItem);
  }

};

export default List
