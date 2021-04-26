import logo from './logo.svg';
import './App.css';
import Book from './Book'
import booksJSON from './books.json'

function App() {
  const bookComponent = booksJSON.map(book => {
    return(
      <Book title={book.title} author={book.author} />
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Books List</h1>
       {bookComponent} 
      </header>
    </div>
  );
}

export default App;
