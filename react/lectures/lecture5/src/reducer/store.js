// npm install @reduxjs/toolkit

import {configureStore} from "@reduxjs/toolkit";

//reducer
const reducer = (state=0, action) => {
    switch(action.type){
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        default:
            return state;
    }
};

//Создание хранилища (store)
const store = configureStore({
    reducer: reducer,
});

export default store;