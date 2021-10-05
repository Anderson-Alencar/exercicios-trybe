import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    value.map(e => <li>{e}</li>)
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Task(['Café', 'Trabalho', 'Almoço', 'Estudos', 'Jantar', 'Descanso'])}
        </p>
      </header>
    </div>
  );
}

export default App;
