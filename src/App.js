import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings'
import GreetingsFunc from './components/pure/greetingsFunc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* own component greetins.jsx */} 
        {/* <Greetings name="Igor"></Greetings> */}
        <GreetingsFunc name="Igor"></GreetingsFunc>
      </header>
    </div>
  );
}

export default App;
