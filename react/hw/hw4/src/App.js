import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

/**
 * 
 * Создать приложение с двумя страницами: "Главная страница" и "О нас".
  На каждой странице должна быть навигационная ссылка для перехода на другую страницу.

  Шаги выполнения:
Установка react-router-dom:
Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.

Создание компонентов:
— Создайте два компонента: HomePage.jsx и AboutPage.jsx.
— В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
— Реализовать переходы.
 */

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
