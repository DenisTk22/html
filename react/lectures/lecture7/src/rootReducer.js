const initialState = {
    data: []
};

export function rootReducer(state = initialState, action) {
    return state; 
}

//Persist

// import { combineReducer } from 'redux';
// import dataReducer from './dataReducer';

// export const rootReducer = combineReducer({
//     root: (state = {data: [] }, action) => state, //Это ваш существующий редьюсер
//     data: dataReducer, //Это ваш новый dataReducer
// });

