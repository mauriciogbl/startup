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
      fav: this.props.favorite
    };
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
      this.props.onSubmit(this.state, this.props.index, this.props.action);
    }
  }

  render() {
    return (
      <div className="inputsContent">
        <Input id="titleInput" value={this.state.title} onChange={this.handlerChange.bind(this, 'title')} type="text" holder={this.props.title || "Title"} />
        <br />
        <Input id="yearInput" value={this.state.year} onChange={this.handlerChange.bind(this, 'year')} type="text" holder={this.props.year || "Year"} />
        <br />
        <Input id="durationInput" value={this.state.duration} onChange={this.handlerChange.bind(this, 'duration')} type="text" holder={this.props.duration || "Duration"} />
        <br />
        <p>Favorite</p><input id="favoriteInput" checked={this.state.fav} onChange={this.handlerChange.bind(this, 'fav')} type="checkbox" />
        <Button click={this.handlerSubmit.bind(this)} clase="button" id="createButton" value="Submit" />
      </div>
    );
  }
};

export default Form
