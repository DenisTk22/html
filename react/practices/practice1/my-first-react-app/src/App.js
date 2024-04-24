import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <CurrentTime />
        <EventCard name='Гонка' date='сегодня' place='арена' />
        <EventCard name='Танцы' date='25.04.2024' place='танцпол' />
        <EventCard name='Шманцы' date='25.05.2024' place='общаге' />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello Denis!</h1>
        <p>Все получится!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Узнать как...
        </a>
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