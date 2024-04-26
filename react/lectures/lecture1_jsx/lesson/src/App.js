import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import RefExample from './components/ref';
import MessagesList from './components/list';

function App() {
  const userName = 'Denis';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {userName}!</h1>
        <Article number='1' name='Info' />
        <Article number='2' name='Blog' />
        <RefExample />
        <Timer />
        <Counter />
        <Show data='Текст из компонета' />
        <MessagesList />
      
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
