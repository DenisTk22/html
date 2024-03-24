///Тестирование API
//Postman - это платформа для работы с API, которая позволяет разработчикам проектировать, создавать, тестировать и документировать свои API

//Как скачать Postman?
// Необходимо зайти на сайт https://postman.com и нажать на кнопку скачивания для вашей операционной системы

//сервер
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Denis!</h1>')
});

app.listen(3000);

//Создать запрос на Postman
//* Collection --> +
//* *** --> Add folder
//* Create request --> localhost:3000/ --> send