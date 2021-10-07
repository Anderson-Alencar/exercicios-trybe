import './App.css';
import React from 'react'; 

class App extends React.Component {
  constructor() {
    super()
    // this.leftButton = this.leftButton.bind(this);
    // this.centerButton = this.centerButton.bind(this);
    // this.rightButton = this.rightButton.bind(this);
    this.state = {
      number: 0,
    }
  }
  
  leftButton = () => {
    this.setState((numberPrev, _props) => ({ 
      number: numberPrev.number - 1 
    }));
  } 
  
  centerButton = () => {
    this.setState({ number: 0 });
  } 
  
  rightButton = () => {
    this.setState((numberPrev, _props) => ({ 
      number: numberPrev.number + 1 
    }));
  }

  render() {
    const { number } = this.state;

    return (
      <div>
        <button onClick={this.leftButton}>Rem --</button>
        <button onClick={this.centerButton}>{ number }</button>
        <button onClick={this.rightButton}>Add ++</button>
      </div>
    )
  }
}

export default App;
