import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <footer className= 'footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
