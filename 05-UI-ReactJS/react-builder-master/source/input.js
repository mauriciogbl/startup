import React from 'react';

class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = { }
  }
    render() {
        return (
            <div>
              <input id={this.props.id}  value={this.props.value} onChange={this.props.change} type={this.props.type} placeholder={this.props.holder}></input>
            </div>
        );
    }
};
export default Input
