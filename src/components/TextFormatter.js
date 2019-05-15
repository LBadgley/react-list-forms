import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class textFormatter extends PureComponent {
  state = {
    text: '',
    formattedText: '',
    color: '#000000',
    font: 'Big'
  };

  // formatText = () => {
  //   const { text, font } = this.state;
  //   figlet.text(text, {
  //     font: font
  //   }, (err, result) => {
  //     this.setState({ formattedText: result });
  //   });
  // }
  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { text, color, } = this.state;

    // const fontOptions = ['big', 'bubble', 'cosmic', 'isometric2'].map(font => {
    //   return <option key={font} value={font}>{font}</option>;
    // });

    return (
      <>
        <input name="text" value={text} onChange={this.changeHandler} />
        <input name="color" type="color" value={color} onChange={this.changeHandler} />
        <p style={{ color: color }}>{text}</p>
      </>
    );
  }
}
