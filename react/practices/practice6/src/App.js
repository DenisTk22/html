import React from 'react';
import { Provider } from 'react-redux';
// import store from './store/store';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';

import store from './store/store2';
import AddTaskForm from './components/AddTaskForm2';
import TaskList from './components/TaskList2';
/**
 * Два варианта создания ежедневника
 */
const App = () => (
  /**1й вариант */
  // <Provider store={store}>
  //   <div>
  //     <TaskInput />
  //     <TasksList />
  //   </div>
  // </Provider>

  /**2й вариант */

  <Provider store={store}>
    <div>
      <h2>Tasks</h2>
      <AddTaskForm />
      <TaskList />
    </div>
  </Provider>
);

export default App;