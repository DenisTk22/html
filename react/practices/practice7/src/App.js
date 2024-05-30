import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskInput from './components/TaskInput';
import TasksList from './components/TasksList';

const App = () => (
  <Provider store={store}>
    <div>
      <TaskInput />
      <TasksList />
    </div>
  </Provider>
);

export default App;
