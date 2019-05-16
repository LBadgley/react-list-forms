import React, { PureComponent } from 'react';

export default class textFormatter extends PureComponent {
  state = {
    text: '',
    formattedText: '',
    color: 'black',
    font: 'Big'
  };
  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { text, color, } = this.state;

    return (
      <>
        <input name="text" value={text} onChange={this.changeHandler} />
        <input name="color" type="color" value={color} onChange={this.changeHandler} />
        <p style={{ color: color }}>{text}</p>
      </>
    );
  }
}
