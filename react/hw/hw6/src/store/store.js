//Хранилище - это объект, который содержит состояние приложения и представляет методы для его изменения 
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../reducers/reducers";

//Настройка Redux хранилища с использованием productsReducer
const store = configureStore({
    reducer: {
        reducer: productsReducer,
    },
});

export default store;