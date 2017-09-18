import React, { Component } from 'react';



export default class DisplayComponent extends Component {
  constructor(props){
    super(props);
    console.log(this.props.sayWhat, "say what");
  }
  render() {
    return (
      <div className="sayWhat">{this.props.sayWhat}</div>
    );
  }
}
