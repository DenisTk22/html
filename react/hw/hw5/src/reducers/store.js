import { createStore } from "redux";
import themeReducer from "./themeReducer";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore(themeReducer);

// const store = createStore(themeReducer);

export default store;