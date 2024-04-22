import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Denis';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {userName}!</h1>
        <Article number='1' name='Info' />
        <Article number='2' name='Blog' />
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

        {/* вызов компонета  */}
      <Heading />
      </header>
    
    </div>
  );
}

function Heading() { // Это компонент, а не функция, т.к. возвращает html разметку
  return (
    /**нужно обернуть в блок */
    <div>
      <h2>Новый текст внутри заголовка</h2>
      <a href="# ">Читать далее</a>
    </div>
  )
}

/**Классовый компонент с конструктором*/
// class NewComp extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {  }
//   render() { 
//     return (  );
//   }
// }
 
// export default NewComp;
 
// export default ;

/*****Props - передаваемый компонент
 * function Article(props) {
  return ( 
    <div>
      <h2>Статья про {props.name} номер {props.number}</h2>
      <a href="#">Читать статью</a>
    </div>
  );
}
 * или можно использовать деструктизацию: 
function Article({name, number}) {
  return ( 
    <div>
      <h2>Статья про {name} номер {number}</h2>
      <a href="#">Читать статью</a>
    </div>
  );
}
 * 
*/


/**Стилизация
 * стили можно задавать в App.css, инлайн стили
 */
function Article({name, number}) {
  let themeSiteWhite = false;
  return ( 
    <div>
      <h2 className='heading' style={{color: themeSiteWhite ? 'green' : 'red'}} >Статья про {name} номер {number}</h2>
      <a href="#">Читать статью</a>
    </div>
  );
}
export default App;
