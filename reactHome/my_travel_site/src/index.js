import React from 'react';
import ReactDOM from 'react-dom/client';
import {thunk} from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux'; //compose позволит объединить Middleware и redux devtools
import { rootReducer } from './redux/rootRedicer';
import { Provider } from 'react-redux'; // свяжет redux и наше приложение
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // можем dispatch ассинхронные события
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/**передаем хранилище */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store;