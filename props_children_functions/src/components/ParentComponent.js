import React, {Component} from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput(event) {
    event.preventDefault();
    //set the state on input change
    this.setState({whatToSay: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    console.log(this.state.whatToSay, "this state what to say");
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div>
        <div>

            <input className='say' onChange={this.handleInput} type="text" value={this.state.whatToSay} placeholder="Say It, Don't Spray It!" />

        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
          </div>
        </div>
        );
      }
    }
