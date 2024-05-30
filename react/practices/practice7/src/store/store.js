// import { createStore } from 'redux';
// import tasksReducer from '../reducers/reducer';

// const store = createStore(tasksReducer);

// export default store;

import { middleware } from"../middlewares/middleware.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListReducer,
    favList: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});