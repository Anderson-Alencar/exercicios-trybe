import './App.css';
import React from 'react'; 

class App extends React.Component {
  constructor() {
    super()

    this.leftButton = this.leftButton.bind(this);
    this.centerButton = this.centerButton.bind(this);
    this.rightButton = this.rightButton.bind(this);
  }
  
  leftButton() {
    console.log('Clicou no botão da esquerda');
  } 
  
  centerButton() {
    console.log('Clicou no botão do centro');
  } 
  
  rightButton () {
    console.log('Clicou no botão da direita');
  }

  render() {
    return (
      <div>
        <button onClick={this.leftButton}>Esquerda</button>
        <button onClick={this.centerButton}>Centro</button>
        <button onClick={this.rightButton}>Direita</button>
      </div>
    )
  }
}

export default App;
