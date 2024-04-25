import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text='принята'/>
        <Message text='будет расмотрена'/>
        <Message text='потеряна' />
      </header>
    </div>
  );
}

export default App;