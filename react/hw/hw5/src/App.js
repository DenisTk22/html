import React from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useSelector } from "react-redux";
import {Provider} from 'react-redux';
import store from './reducers/store';

/**
 * Приложение для переключения темы сайта
  Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.
Функционал:
  Action types: TOGGLE_THEME.
  Actions: Создайте действие для переключения темы.
  Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
  Component: Создайте компонент, который отображает переключатель для изменения темы сайта.
Описание:
  Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").
Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.
 */

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`App ${theme}-theme`}>
      <header className="App-header">
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
