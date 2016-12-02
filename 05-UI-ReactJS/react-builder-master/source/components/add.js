import React from 'react';
import Form from './form';
import Button from './button';
import Application from './application';
import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE, INITIALIZE} from '../actions/actions';
import moviesStore from '../index.js';

const actions = {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVE, INITIALIZE};
class Add extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };
    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  static defaultProps() {
    duration: '';
    favorite: '';
    index: '';
    title: '';
    year: ''
  }

  handleSubmitForm(event) {
    // if (indexMovieEdited === null || indexMovieEdited === undefined) {
        this.props.actions.addMovie(event)
    // }
    // else {
    //   action.editMovie(event);
    // }
  }

  render() {
    return (
      <div>
        <h1>Add a new movie</h1>
        <Form {...this.getFormProps()}/>
      </div>
    );
  }

  getFormProps() {
    return {
      action: this.props.actions,
      onSubmit: this.handleSubmitForm
    }
  }
};
export default Add

// duration: this.props.movies.moviesState[this.props.params.idxMovie].duration,
// favorite: this.props.movies.moviesState[this.props.params.idxMovie].title.fav,
// index: this.props.params.idxMovie,
// title: this.props.movies.moviesState[this.props.params.idxMovie].title,
// year: this.props.movies.moviesState[this.props.params.idxMovie].year
