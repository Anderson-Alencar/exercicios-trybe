import './App.css';
import data from './data.js'
import Pokemon from './pokemon.js';

function App() {
  return (
    <div>
      <h1 className='title'>Pokedex</h1>  
      <div className="App">  
      {data.map(element =>
        <Pokemon nome={element.name} tipo={element.type} peso={element.averageWeight.value} unidade={element.averageWeight.measurementUnit} imagem={element.image}/>  
      )}
    </div>
    </div>
    
  );
}

export default App;
