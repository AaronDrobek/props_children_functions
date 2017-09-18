import React, {Component} from 'react';

export default class BaseLayout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <nav className="navbar">
         <h3>Navigation Bar: A cocktail lounge for coders</h3>
       </nav>

       {this.props.children}

       <footer>
         <h3></h3>
       </footer>
      </div>
    );
  }
}
