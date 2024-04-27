import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Counter from './practice2/Counter';
import TextInput from './practice2/TextInput';
import TodoList from './practice2/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <CurrentTime />
        <TextInput />
        <EventCard name='Гонка' date='сегодня' place='арена' />
        <TodoList />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello Denis!</h1>
        <p>Все получится!</p>
        <Counter />
      </header>
    </div>
  );
}

// export { App, Greeting };

// function Greeting() {
//   return (
//     <h1>Привет, React!</h1>
//   )
// }

export default App;