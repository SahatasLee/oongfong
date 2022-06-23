import './App.css';

const Navbar = () => {
  return (
    <div>Navbar</div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          From App Oongfong
        </a>
      </header>
    </div>
  );
}

export default App;
