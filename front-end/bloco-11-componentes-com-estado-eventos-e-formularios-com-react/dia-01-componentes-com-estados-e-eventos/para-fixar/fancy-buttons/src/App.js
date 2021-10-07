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
      color: '#fff'
    }
  }
  
  leftButton = () => {
    this.setState((numberPrev, _props) => ({ 
      number: numberPrev.number - 1 
    }),
    this.paintButton
    );
  } 
  
  centerButton = () => {
    this.setState({ number: 0 });
  } 
  
  rightButton = () => {
    this.setState((numberPrev, _props) => ({ 
      number: numberPrev.number + 1 
    }), 
      this.paintButton
    );
  }

  paintButton = () => {
    const { number } = this.state

    if (number % 2 === 0) { 
      this.setState({ color: '#0f0'})
    } if (number % 2 !== 0) { 
      this.setState({ color: '#f00'})
    }
  }

  render() {
    const { number, color } = this.state;

    return (
      <div>
        <button onClick={this.leftButton}>Rem --</button>
        <button style={{backgroundColor: color}} onClick={this.centerButton}>{ number }</button>
        <button onClick={this.rightButton}>Add ++</button>
      </div>
    )
  }
}

export default App;
