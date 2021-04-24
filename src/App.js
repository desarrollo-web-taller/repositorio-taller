import logo from './logo.svg';
import './App.css';
import App2 from './App2';

export default function App() {
  return (
    <div className="App">
      <App2></App2>
      <header className="App-header">
        <h2>Mi nueva pagina</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

