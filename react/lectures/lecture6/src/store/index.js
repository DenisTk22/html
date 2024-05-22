import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
//установить reduxjs/toolkit

const store = configureStore({
    reducer: rootReducer
});

export default store;