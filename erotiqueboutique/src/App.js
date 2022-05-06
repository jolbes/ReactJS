import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comenzando a desarrollar en <code>ReactJS,</code> ...Sorprendente!.
        </p>
        <a
        className="App-link"
        href="https://github.com/jolbes/ReactJS"
        target="_blank"
        rel="noopener noreferrer"
        >
          Mi GitHub
        </a>
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

export default App;
