import logo from './amp.JPG';
import bee from './static/bee.jpeg'
import jiim from './static/jiim.jpeg'
import yana from './static/yana.jpeg'
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
        <img src={logo} className="App-logo" alt="logo" />
        <img src={bee} className="App-logo" alt="logo" />
        <img src={jiim} className="App-logo" alt="logo" />
        <img src={yana} className="App-logo" alt="logo" />
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
