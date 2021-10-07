import './App.css';
import React from 'react';

const leftButton = () => console.log('Clicou no botão da esquerda');

const centerButton = () => console.log('Clicou no botão do centro');

const rightButton = () => console.log('Clicou no botão da direita');

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={leftButton}>Esquerda</button>
        <button onClick={centerButton}>Centro</button>
        <button onClick={rightButton}>Direita</button>
      </div>
    )
  }
}

export default App;
