import React from 'react';
import Button from './button';
import Form from './form';
import Input from './input';
import Application from './application';
import moviesStore from './store';
import { Link } from 'react-router';

import { addMovie, editMovie, deleteMovie, initialize } from './actions';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
    this.renderItem = this.renderItem.bind(this);
    this.getAllMovies = this.getAllMovies.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }


  editItem() {
    <Item movie={item} index={index} />
  }

  getAllMovies() {
    let movies = [];
    if (localStorage.getItem("moviesLocalStorage")) {
      movies = JSON.parse(localStorage.getItem("moviesLocalStorage"));
    }
    return movies.map(this.renderItem);
  }
  handleClickEdit(index, title, year, duration) {
    console.log('intento editar una pelicula')
    moviesStore.dispatch(initialize());
    moviesStore.dispatch(editMovie(index));
  }

  renderItem (item, index) {
    let favorite = "Not favorite"
    if (item.fav) {
      favorite = "Favorite";
    }
    return (
      <li className="li" key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} - ${favorite}`}
        <Link to='/add?index' className="link-edit">edit</Link>
      </li>

    );
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
};

export default List
