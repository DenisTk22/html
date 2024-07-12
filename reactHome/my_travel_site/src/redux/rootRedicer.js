// создаем корневой файл, для хранение всех reducers

import { combineReducers } from "redux"; // с помощью этой функции будем объединять все наши редьюсеры
import { likesReducer } from "./likesReducer";
import {inputReducer } from './inputReducer';

export const rootReducer = combineReducers({
    likesReducer, //likesReducer: likesReducer
    inputReducer
});