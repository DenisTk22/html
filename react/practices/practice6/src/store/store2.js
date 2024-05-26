import { createStore } from 'redux';
import tasksReducer from '../redux/taskReducers2';

const store = createStore(tasksReducer);

export default store;