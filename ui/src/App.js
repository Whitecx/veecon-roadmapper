import logo from './logo.svg';
import './App.css';
import EventMapper from './Components/eventMapper.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            <EventMapper />
        </div>
      </header>
    </div>
  );
}

export default App;
