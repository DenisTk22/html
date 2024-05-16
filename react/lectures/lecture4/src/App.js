import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

const products = [
  {id: 1, name: "Товар 1", description: "Описание товара 1", proce: "100 руб"},
  {id: 2, name: "Товар 2", description: "Описание товара 2", proce: "200 руб"},
  {id: 3, name: "Товар 3", description: "Описание товара 3", proce: "300 руб"},
  {id: 4, name: "Товар 4", description: "Описание товара 4", proce: "400 руб"},
  {id: 5, name: "Товар 5", description: "Описание товара 5", proce: "500 руб"},
  {id: 6, name: "Товар 6", description: "Описание товара 6", proce: "600 руб"},
  {id: 7, name: "Товар 7", description: "Описание товара 7", proce: "600 руб"}
];


function App() {
  // <Router>
  //   <Routes>
  //     <Route path="/page/:pageName" element={<ProductList products={products} />} />
  //     <Route path="/product/:productId" element={<ProductDetail products={products} />} />
  //   </Routes>
  // </Router>
  return (
    <>
      <div className="App">
        {/* {
          console.log(
            <DivWithChild>
              <p>Новый текст</p>
              <div>Новый элемент div</div>
            </DivWithChild>  
          )
        } */}

        {/* {
           //Example2
            <div>
              <h2>Пример2 использования "children"</h2>
              <BorderComp>
                <p>Этот абзац находится внутри рамки.</p>
                <button>Кнопка внутри рамки</button>
              </BorderComp>
            <BorderComp>
              <p>Новый заголовок</p>
            </BorderComp>
             <p>Этот абзац находится снаружи рамки</p>
            </div>
        } */}
        {/* Example3 легко создавать кастомные карточки с разными элементами внутри, такими как текст, кнопки, ссылки и др */}
          
          {/* <div>
            <h2>Пример 3 использования "props.children"</h2>
            <Card title="Карточка1">
              <p>Это содержимое первой карточки</p>
              <button>Действие</button>
            </Card>
            <Card title="Карточка2">
              <p>Это содержимое второй карточки</p>
              <a href='#'>Ссылка</a>
            </Card >
          </div> */}
          {/* <div>
            <h1>Пример Render props с функциональными компонентами</h1>
            <MouseTracker render={({x, y}) => <MouseInfo x={x} y={y} />} />
          </div> */}
         

      </div>
    </>
  );
}

function BorderComp({children}) {
  return (
    <div style={{border: '1px solid red', padding: '16px'}}>
      {children}
    </div>
  );
}

function DivWithChild({children}) {
  return (
    <div>
      {children}
    </div>
  );
}

const Card = ({title, children}) => {
  return (
    <div style={{border: '1px solid black', padding: '16px'}}>
      <h2>{title}</h2>
      <p>Рекламный текст</p>
      {/* children - Это то что написано внутри Card */}
      {children} 
    </div>
  );
}

export default App;

//////Render props
// Другим способом контролировать рендер дочернего компонента является паттерн
// render props - в этом случае родительский компонент передает дочернему функцию
// render(функция не обязательно должна называться именно render, но это
// общепринятый подход).Дочерний компонент, в свою очередь, может вызвать
// props.render с некоторыми аргументами.

const MouseTracker = ({render}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const handleMouseMove = (event) => {
    setPosition({x: event.clientX, y: event.clientY});
  };

  return (
    <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
      {/* Внутри Render prop используем переменную функцию */}
      {render(position)}
    </div>
  );
};

//Компонент, который использует Render prop для рендеринга информации о положпении курсора
const MouseInfo = ({x, y}) => {
  return (
    <>
      <h2>Положенеи курсора мыши</h2>
      <p>x: {x}, y: {y}</p>
    </>
  );
}