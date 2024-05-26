import { createStore } from 'redux';
import tasksReducer from '../redux/reducer';

const store = createStore(tasksReducer);

export default store;