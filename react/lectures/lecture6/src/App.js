import './App.css';
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import CounterComponent from './components/CounterComponent';
// import ButtonComponent from './components/ButtonComponent';
// import ButtonComponentMinus from './components/ButtonComponentMinus';
import AddTodo from './components2/AddTodo';
import TodoList from './components2/TodoList';
import TodoFilter from './components2/TodoFilter';
import { FilterProvider } from './contexts2/FilterContext';

// npm install react-redux
// npm install @reduxjs/toolkit

const App = () => {
  //Задание 1 Счетчик
  // return (
  //   <Provider store={store}>
  //     <>
  //       <CounterComponent />
  //       <ButtonComponent />
  //       <ButtonComponentMinus />
  //     </>
  //   </Provider>
  // );

  //Задание 2
  //При загрузке приложения, пользователь видит три  основных компонента: список задач (TodoList), поле для добавления новой задачи (AddTodo) и фильтр для выбора видимых задач (TodoFilter).

  //В TodoList, пользователь видит все текущие задачи. Задачи могут быть отменены как выполненые или не выполненые. (Пользователь может также удалить задачу из списка.**)

  //В AddTodo пользователь может ввести текст задачи и добавить ее в список задач, нажатием кнопки.

  //В TodoFilter пользователь может фильтровать задачи на три категории: все, выполненые и невыполненые.

  //Все действия пользователя приводят к отправке действий в хранилище Redux через функции-действия, определенные в файле todoAction.js

  //Редуктор в файле todoReducer.js слушает дейтсвие и обновляет состояние в соответствие с этими действиями.

  //Компоненты реагируют на изменения состояния и обновляют отображение соответствующим образом.

  //Контекст фильтра (в файле FilterContext.js) предоставляет возможность изменить фильтр и получать его значение в любом компоненте, который его использует.

  //Компонент высшего порядка withFilter.js оборачивает TodoList, предоставляя ему функциональность фильтрации задач в соответствии с выбранном фильтром.

  //Хранилище Redux создается в файле store.js и передается в компонент Provider в файле index.js.

  return (
    <FilterProvider>
      <AddTodo/>
      <TodoList/>
      <TodoFilter/>
    </FilterProvider>
  );
};

export default App;
