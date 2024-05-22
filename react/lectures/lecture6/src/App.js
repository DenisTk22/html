import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './components/CounterComponent';
import ButtonComponent from './components/ButtonComponent';
import ButtonComponentMinus from './components/ButtonComponentMinus';
// npm install react-redux
// npm install @reduxjs/toolkit

function App() {
  return (
    <Provider store={store}>
      <>
        <CounterComponent />
        <ButtonComponent />
        <ButtonComponentMinus />
      </>
    </Provider>
  );
}

export default App;
