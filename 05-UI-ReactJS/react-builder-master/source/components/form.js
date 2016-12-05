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

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(typeOfChange, event) {
    let newState = this.state;

    typeOfChange === 'fav' ? (
      newState[typeOfChange]=event.target.checked
    ) : (
      newState[typeOfChange]=event.target.value
    );

    this.setState(newState);
  }

  handlerSubmit(event) {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.props.index, this.state);
    }
  }

  render() {
    return (
      <div className="inputsContent">
        <Input {...this.getInputTitleProps()} />
        <br />
        <Input {...this.getInputYearProps()} />
        <br />
        <Input {...this.getInputDurationProps()} />
        <br />
        <p>Favorite</p><input {...this.getInputFavoriteProps()} />
        <Button click={this.handlerSubmit.bind(this)} clase="button" id="createButton" value="Submit" />
      </div>
    );
  }

  getButtonProps() {
    return {
      click: this.handlerSubmit,
      clase: 'button',
      id: 'createButton',
      value: 'Submit'
    }
  }

  getInputDurationProps() {
    return {
      id: 'durationInput',
      value: this.state.duration,
      onChange: this.handlerChange.bind(this, 'duration'),
      type: 'text',
      holder: this.props.duration || 'Duration'
    }
  }

  getInputFavoriteProps() {
    return {
      id: 'favoriteInput',
      checked: this.state.fav,
      onChange: this.handlerChange.bind(this, 'fav'),
      type: 'checkbox'
    }
  }

  getInputTitleProps() {
    return {
      id: 'titleInput',
      value: this.state.title,
      onChange: this.handlerChange.bind(this, 'title'),
      type: 'text',
      holder: this.props.title || 'Title'
    }
  }

  getInputYearProps() {
    return {
      id: 'yearInput',
      value: this.state.year,
      onChange: this.handlerChange.bind(this, 'year'),
      type: 'text',
      holder: this.props.year || 'Year'
    }
  }
}

export default Form
