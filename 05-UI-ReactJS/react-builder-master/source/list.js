import React from 'react';
import Button from './button';
import Input from './input';


class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    }
    this.renderList = this.renderList.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  editItem() {
    <Item movie={item} index={index} />
  }

  renderList () {
    return this.props.movies.map(this.renderItem);
  }

  handlerChange(event) {
    let newState = this.state;
    newState.selected = event.target.checked
    this.setState(newState);
  }

  renderItem (item, index) {
    let favorite = "Not favorite"
    if (item.fav) {
      favorite = "Favorite";
    }
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} - ${favorite}`}
        <button onClick={this.click.bind(this, index)}>Edit</button>
      </li>

    );
  }

  click (index) {
    console.log(index);
    this.props.onSubmit(index)
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
};

export default List
