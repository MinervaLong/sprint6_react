import logo from './logo.svg';
import './App.css';
import Book from './Book'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Books List</h1>
       <Book title='Viatge a la lluna'/> 
      </header>
    </div>
  );
}

export default App;
