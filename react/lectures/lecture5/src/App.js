import Raect, {createContext, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

//как было раньше с props
// function GrandParent() {
//   return <Parent message='Hello from the top!'/>
// };

// function Parent(props) {
//   return <Child message={props.message}/>
// };

// function Child(props) {
//   return <GrandParent message={props.message} />
// };

// function GrandGrandGrandChild(props) {
//   return <span>{props.message}</span>
// }

//СОздаем контекст
//React.Context
//Инструмент для передачи данных в компоненты на любом уровне вложенности без необходимости передавать их через пропсы
const MessageContext = createContext();

// Компонент GrandGrandGrandChild использует контекст
function GrandGrandGrandChild() {
  // Используем useContext для доступа к контексту
    const message = useContext(MessageContext);
    return <span>{message}</span>
}

//Компонент GrandParent устанавливает контекст
function GrandParent() {
    return (
        <MessageContext.Provider value="Hello from the top Context!">
            <Parent />
        </MessageContext.Provider>
    );
}

//Компонент Parent передает контекст через пропсы
function Parent() {
    return <Child />
}

//Компонент Child передает контекст дальше
function Child() {
  return <GrandChild />
}

//Компонент GrandChild передает контекст на последний уровень
function GrandChild() {
  return <GrandGrandGrandChild />
}

///EX2
//Шаг1, создаем контекст
// const ThemeContext = createContext();

//Компонент, использующий контекст
// const ThemeButton = () => {
//   //Шаг 2, используем useContext для доступа к контексту
//   const theme = useContext(ThemeContext);
//   return <button style={{background: theme.background, color: theme.foreground}}>Theme Button</button>
// }
//Компонент, который устанавливает контекст
// function App() {
//   // шаг3, определяем состояние, которое будет передаваться через контекст

//     const [theme, setTheme] = useState({
//         background: 'lightgray',
//       foreground: 'black'
//     });
// // шаг4, оборачиваем компоненты, которые должны использовать контекст, в провайдер контекста
//   return (
//     // <div className="App">
//     //   <h1>Пример использования React.Context</h1>
//     //   <GrandParent />
//     // </div>
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <h1>Используем React.Context</h1>
//         <ThemeButton />
//         <button
//         onClick={() =>
//             setTheme({
//               background: 'lightblue',
//               foreground: 'white'
//             })
//         }>
//           Сменить тему
//         </button>
//       </div>
//     </ThemeContext.Provider>
//   );
// };

//EX3
//Создаем контекст для темы и заметок
const ThemeContext = createContext();
const NoteContext = createContext();

//СОздаем пользовательские хуки для удобства использования контекстов
const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NoteContext);

//Компонент, отображающий список заметок
function NoteList() {
    const {notes} = useNotes();
    return (
        <ul>
            {notes.map((note, i) => <li key={i}>{note}</li>)}
        </ul>
    );
};

//Компонент, позволяющий добавлять заметки
function NoteInput() {
    const [inputValue, setInputValue] = useState('');
    const {addNote} = useNotes();

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleAddNote = () => {
        addNote(inputValue);
        setInputValue('');
    };

    return (
      <>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleAddNote}>Добавить</button>
      </>
    );
};

//Компонент для переключения темы
const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
    return <button onClick={toggleTheme}>
      Нажми, чтбы переключиться на {theme === 'light' ? 'dark' : 'light'} тему
    </button>;
};

// const App = () => {
//     const [notes, setNotes] = useState(['Элемент списка1, Элемент списка 2']);
//     const [theme, setTheme] = useState('light');

//     const addNote = note => {
//       setNotes((prevNotes) => [...prevNotes, note]);
//     };

//     const toggleTheme = () => {
//       setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
//     };

//     return (
//       <ThemeContext.Provider value={{ theme, toggleTheme }}>
//         <NoteContext.Provider value={{ notes, addNote }}>
//           <div className="content" style={{ color: theme === 'light' ? 'black' : 'white',
//               background: theme === 'light' ? 'white' : 'black' }}>
//                 <h1>Список</h1>
//                 <ThemeToggle />
//                 <NoteList />
//                 <NoteInput />
//           </div>
//         </NoteContext.Provider>
//       </ThemeContext.Provider>    
//     );
// };

//HOC компонент высшего порядка

//НОС для добавления стилей к компоненту
const withStyle = (WrappedComponent, styles) => {
    return (props) => {
          const newProps = {...props, styles};
          return  <WrappedComponent {...newProps}/>;
    };
};

//Компонент, который будет обернут в стили
const Button = ({styles}) => {
    return (
        <button style={styles}>CLick me</button>
    );
};

const Text = ({ styles }) => {
  return (
    <p style={styles}>Text</p>
  );
};

//Используем НОС для добавления стилей к компоненту Button
const StyleButton = withStyle(Button, {color: 'red', background: 'yellow'});
const StyleButton2 = withStyle(Button, { color: 'red', background: 'green' });
const StyledText = withStyle(Text, { color: 'grey', background: 'green' });

// const App = () => {
//     return (
//       <>
//         <h1>Пример Компоненты высшего порядка (НОС) с функциональными компонентами</h1>
//         <StyleButton/>
//         <StyleButton2/>
//         <StyledText />
//       </>
//     );
// };

//HOC для счетчика
//НОС для добавления счетчика к компонету


export default App;
