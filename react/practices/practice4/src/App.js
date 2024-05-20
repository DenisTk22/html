import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import List from './components/List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DetailPage from './components/DetailPage';
import ListPage from './components/ListPage';


/**
 * Задание 3
 * Установка react-router-dom:
Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.
Создание компонентов:
Создайте два компонента: HomePage.jsx и AboutPage.jsx.
В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
 * Настройка роутинга:
 * В корневом компоненте App.js импортируйте все необходимые компоненты.
 * Для навигации между страницами добавьте в верхнюю часть каждого компонента (HomePage и AboutPage) навигационные ссылки (<Link to='/'>Главная</Link> И <Link to='/about'>О нас</Link>)
 */
/**
 * 
 *  Задание 4
 * Создайте маленькое приложение со страницей списка ListPage и страницей деталей DetailPage.
 * На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент является ссылкой на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
 * На DetailPage используйте useParams для извлечения параметров из URL (например ID элемента) и отобразите детальную информацию об элементе
 */

const App = () => {
  
  const articles = [
    {id: 1, title: "Артикль 1", description: "Описание артикля 1"},
    {id: 2, title: "Артикль 2", description: "Описание артикля 2"},
    {id: 3, title: "Артикль 3", description: "Описание артикля 3"},
    {id: 4, title: "Артикль 4", description: "Описание артикля 4"},
    {id: 5, title: "Артикль 5", description: "Описание артикля 5"},
    {id: 6, title: "Артикль 6", description: "Описание артикля 6"},
    {id: 7, title: "Артикль 7", description: "Описание артикля 7"}
  ];

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ListPage articles={articles}/>} />
          <Route path='/articles/:id' element={<DetailPage articles={articles}/>} />
        </Routes>
      </Router>
    </>
  )
  // Задача3
  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route path='/' element={<HomePage/>} />
  //         <Route path='/about' element={<AboutPage/>} />
  //       </Routes>
  //     </Router>
  //   </>
  // )
}

// Задача2// Массив элементов для списка 
// const items = ['Пункт 1', 'Пункт 2', 'Пункт 3'];

// // Функция для рендеринга каждого элемента списка
// const renderItem = (item, index) => {
// // Пример условного стиля на основе индекса
//   const style = { color: index % 2 === 0 ? 'blue' : 'red' };
//   return (
//     <div style={style}>
//       {item} - Уникальный стиль
//     </div>
//   );
// };

//  return (
//     <div>
//       <h1>Пример списка с уникальными стилями</h1>
//       <List items={items} renderItem={renderItem} />
//     </div>
//   );
// };

//Задача1
  // return (
  //   <div>
  //     <h1>Пример использования компонента Box</h1>
  //     <Box>
  //     <p>Текст внутри Box</p>
  //     </Box>
  //     <Box>
  //     <img src="https://via.placeholder.com/150" alt="Placeholder" />
  //     </Box>
  //     <Box>
  //     <div style={{ background: 'lightblue', padding: '10px' }}>
  //     Другой компонент внутри Box
  //     </div>
  //     </Box>
  //   </div>
  // );
// };

export default App;