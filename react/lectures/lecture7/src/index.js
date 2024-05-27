import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import asyncMiddlewareEx3 from './asyncMiddlewareEx3';
import dataReducer from './reducers/dataReducer';

//Ex1
//Это промежуточное ПО для демонстрации доп эффектов
const middleware = store => next => action => {
  console.log('middleware');

  setTimeout(() => {
    console.log('middleware1000');
  }, 1000);

  return next(action);
};

//Ex2
//Это logger middleware, который выводит действия, отрпавленные в store.
const loggerMiddleware = store => next => action => {

  console.log('action', action);

  return next(action);
};

//Ex3 Saga
// СЩздаем middleware для Redux-Saga
// const sagaMiddleware = createSagaMiddleware();

// Конфигурация для Redux-Persist
const persistConfig = {
    key: 'root', // Ключ, по которому хранится состояние в storage
    storage, // Объект storage для хранения
};

// Создаем "персистентный" редьюсер с использованием presistReducer  и конфигурации.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Настраиваем store с "персистентный" редьюсером и всеми middleware
const store = configureStore({
  reducer: persistedReducer, // используем "персистентный" редьюсер
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: ['persist/PERSIST'], // Игнорируем действие persist/PERSIST, т.к. оно не сериализуемо
            },
        }).concat(middleware, loggerMiddleware, asyncMiddlewareEx3, thunk, sagaMiddleware),
});

// запускаем нашу сагу
sagaMiddleware.run(mySaga);

//Инициализируем presistor, который будет использоваться для сохранения/ восстановления состояния
let persistor = persistStore(store);

//Оборачиваем наше приложение в Provider и PersistGate для предоставления store и persistor
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/**Подключаем  PersistGate с persistor*/}
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

///Ex Saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {...rootReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware, loggerMiddleware, asyncMiddlewareEx3, thunk, sagaMiddleware), //указываем через запятую ex1, ex2 ...
});

//Запускаем нашу сагу
sagaMiddleware.run(mySaga);

//Presist
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
