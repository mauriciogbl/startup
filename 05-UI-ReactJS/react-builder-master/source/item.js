import React from 'react';

class Item extends React.Component{
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <div>
        <input placeholder={this.prop.item.title}></input>
        <input placeholder={this.prop.item.year}></input>
        <input placeholder={this.prop.item.duration}></input>
      </div>
    );
  }

  getProps () {
    return {
      item: this.props.itm,
      index: this.props.idx,

    };
  }
};
export default Item
