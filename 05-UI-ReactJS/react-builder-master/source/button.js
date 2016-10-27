import React from 'react';

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = { }
  }
    render() {
        return (
            <div className="buttonsSection">
              <button onClick={this.props.Click} className={this.props.clase} id={this.props.id} type="button" name="button">{this.props.value}</button>
            </div>
        );
    }
};
export default Button
