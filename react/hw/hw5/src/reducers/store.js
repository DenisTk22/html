import { createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";

// const store = configureStore(themeReducer);

// const store = configureStore({
//     reducer: {
//         theme: themeReducer,
//     }
// })

const store = createStore(themeReducer);

export default store;