import React from 'react';
import List from './list';
import Add from './add';
import Form from './form'

class Application extends React.Component {

  getAllMovies() {
    let movies = localStorage.getItem("moviesLocalStorage") || [];
    return JSON.parse(movies);
  }

  render() {
    return (
      <div>
        <Add />
        <h1>List of Movies</h1>
        <List movies={this.getAllMovies()} onSubmit={this.handleChange} />
      </div>
    );
  }

  handleChange (index) {s
    console.log(index);
    let movies = JSON.parse(localStorage.getItem("moviesLocalStorage"));
    console.log(movies[index]);
    return (
      <Form title={movies[index].title} year={movies[index].year} duration={movies[index].duration} fav={movies[index].fav} />
    )
  }
};

export default Application
