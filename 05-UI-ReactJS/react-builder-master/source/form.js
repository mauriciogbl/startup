import React from 'react';
import Button from './button';
import Input from './input';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      year: this.props.year,
      duration: this.props.duration,
      fav: this.getDefaultFav()
    };
  }

  getDefaultFav() {

    if (this.props.fav != undefined && this.props.fav != null) {
      return this.props.fav
    }
    return false;
  }
  handlerChange(param, event) {
    let newState = this.state;

    if (param === 'fav') {
      newState[param] = event.target.checked
    }
    else {
      newState[param] = event.target.value
    }
    this.setState(newState);
  }

  handlerSubmit(event) {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className="inputsContent">
        <Input id="titleInput" value={this.state.title} onChange={this.handlerChange.bind(this, 'title')} type="text" holder="Title" />
        <br />
        <Input id="yearInput" value={this.state.year} onChange={this.handlerChange.bind(this, 'year')} type="text" holder="Year" />
        <br />
        <Input id="durationInput" value={this.state.duration} onChange={this.handlerChange.bind(this, 'duration')} type="text" holder="Duration" />
        <br />
        <p>Favorite</p><input id="favoriteInput" value={this.state.fav} onChange={this.handlerChange.bind(this, 'fav')} type="checkbox" />
        <Button click={this.handlerSubmit.bind(this)} clase="button" id="createButton" value="Submit" />
      </div>
    );
  }
};

export default Form
