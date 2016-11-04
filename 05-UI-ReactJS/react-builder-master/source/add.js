import React from 'react';
import Form from './form';
import Application from './application';
import moviesStore from './store';
import { addMovie, editMovie, deleteMovie, initialize } from './actions';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.states = { };
  }

  handlerSubmitForm(event) {
    moviesStore.dispatch(initialize());
    moviesStore.dispatch(addMovie(event));
  }
  handlerButton() {
    console.log(index);
  }

  render() {
    return (
      <div>
      <Application />
      <h1>Add a new movie</h1>
      <Form onSubmit={this.handlerSubmitForm} />
      </div>
    );
  }
};

export default Add
