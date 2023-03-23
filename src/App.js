import logo from './logo.svg';
import './App.css';
import Greetings from './components/pure/greetings'
import GreetingsFunc from './components/pure/greetingsFunc';
import TasksList from './components/container/TasksList';
import UsersList from './components/container/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* own component greetins.jsx */} 
        {/* <Greetings name="Igor"></Greetings> */}
        {/* <GreetingsFunc name="Igor"></GreetingsFunc> */}
        {/* Task list component */}
        <TasksList></TasksList>
        <UsersList></UsersList>
      </header>
    </div>
  );
}

export default App;
