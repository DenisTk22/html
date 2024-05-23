//Хранилище - это объект, который содержит состояние приложения и представляет методы для его изменения 
import { configureStore } from "@reduxjs/toolkit";
import todosReduser from "./reducers/todosReducer";

//Настройка Redux хранилища с использованием todosReducer
const store = configureStore({
  reducer: {
    todos: todosReduser,
  },
});

export default store;