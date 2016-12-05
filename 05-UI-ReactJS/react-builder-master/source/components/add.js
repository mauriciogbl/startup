import React from 'react';
import Form from './form';
import Button from './button';
import Application from './application';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.getDuration = this.getDuration.bind(this)
  }

  static defaultProps() {
    duration: '';
    favorite: '';
    index: '';
    title: '';
    year: ''
  }

  handleSubmitForm(indexMovieSelected, event) {
    if (indexMovieSelected === undefined) {
        this.props.actions.addMovie(event);
        let index = this.props.movies.moviesState.length;
        alert('Movie: ' +this.props.movies.moviesState[index -1].title +' succesfully added !')
    }
    else {
      this.props.actions.editMovie(event, indexMovieSelected);
      alert('Movie: ' +this.props.movies.moviesState[indexMovieSelected].title +' succesfully updated !')
    }
  }

  render() {
    return (
      <div>
        <Application />
        <h1>Add a new movie</h1>
        <Form {...this.getFormProps()}/>
      </div>
    );
  }

  getFormProps() {
    return {
      action: this.props.actions,
      duration: this.getDuration(),
      favorite: this.getFavorite(),
      onSubmit: this.handleSubmitForm,
      index: this.props.index,
      title: this.getTitle(),
      year: this.getYear()
    }
  }

  getDuration() {
    let flag = '';
    this.props.index === undefined ? flag = '' : flag = this.props.movies.moviesState[this.props.index].duration;
    return flag
  }

  getFavorite() {
    let flag = '';
    this.props.index === undefined ? flag = '' : flag = this.props.movies.moviesState[this.props.index].fav;
    return flag
  }

  getTitle() {
    let flag = '';
    this.props.index === undefined ? flag = '' : flag = this.props.movies.moviesState[this.props.index].title;
    return flag
  }

  getYear() {
    let flag = '';
    this.props.index === undefined ? flag = '' : flag = this.props.movies.moviesState[this.props.index].year;
    return flag
  }
};
export default Add
// movies.moviesState[this.props.index]
