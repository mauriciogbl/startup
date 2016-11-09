import React from 'react';
import Form from './form';
import Button from './button';
import Application from './application';


class Add extends React.Component {
  constructor(props) {
    super(props);

    this.states = { };
    this.getMovieById = this.getMovieById.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getYear = this.getYear.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.getFav = this.getFav.bind(this);
    this.getIdx = this.getIdx.bind(this);
  }

  handlerSubmitForm(event, indexMovieEdited, action) {
    if (indexMovieEdited === null || indexMovieEdited === undefined) {
      action.addMovie(event)
    }
    else {
      action.editMovie(event, indexMovieEdited);
    }
  }

  getMovieById() {
    return this.props.movies.moviesState[this.props.params.idxMovie];
  }

  getTitle() {
    let movieSelected = this.getMovieById();
    if (movieSelected === null || movieSelected === undefined) {
      return '';
    }
    return movieSelected.title;
  }

  getYear() {
    let movieSelected = this.getMovieById();
    if (movieSelected === null || movieSelected === undefined) {
      return '';
    }
    return movieSelected.year;
  }

  getDuration() {
    let movieSelected = this.getMovieById();
    if (movieSelected === null || movieSelected === undefined) {
      return '';
    }
    return movieSelected.duration;
  }

  getFav() {
    let movieSelected = this.getMovieById();
    if (movieSelected === null || movieSelected === undefined) {
      return '';
    }

    return movieSelected.fav ;
  }

  getIdx() {
    return this.props.params.idxMovie;
  }

  render() {
    console.log('props en add',this.props.movies)
    return (
      <div>
      <Application />
      <h1>Add a new movie</h1>
      <Form onSubmit={this.handlerSubmitForm} action={this.props.actions} index={this.getIdx()} title={this.getTitle()} year={this.getYear()} duration={this.getDuration()} favorite={this.getFav()} />
      </div>
    );
  }
};
// <Form onSubmit={this.handlerSubmitForm} index={this.getIdx()} title={this.getTitle()} year={this.getYear()} duration={this.getDuration()} favorite={this.getFav()} />

export default Add
