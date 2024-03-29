///Express - это фреймворк для создания веб-приложений на Node.js
//Пример реализации http сервера

const express = require('express');
const path = require('path');

const app = express();

//промежуточный обработчик должен прописываться до основных обработчиков
app.use((req, res, next) => { // Добавление информации в консоль
    console.log('Поступил запрос', req.method, req.url());
    next(); // вызов основного обработчика иначе страница зависнет
});

// статичные файлы, см пукт 4. Используется промежуточный обработчик static() с указание директории, где храняться статичные файлы: 'static'
app.use(express.static('static')) // метод static(), директория 'static'

//Корневая страница
// app.get('/', (req, res) => {
//     res.send('<h1>Добро пожаловать на мой сайт!</h1>')
// });

//возврат html, см пукт 3
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html')); // или res.sendFile('static/index.html'); - указание относительного пути(с использованием промежуточного обработчика static()), где хранятся статичные файлы: index.html, style.css, text.txt и проч
})

//Страница "Обо мне"
app.get('/about', (req, res) => {
    res.send('<h1>Страница обо мне!</h1>')
});

//Страница "Обо мне/тест"
app.get('/about/test', (req, res) => {
    res.send('<h1>Страница обо мне!</h1>')
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${post}`);
});

//1Установка express
// Основы Node.js
// Чтобы начать работать с express, необходимо выполнить три простых шага:
// 1. Для начала нужно создать новую директорию для проекта
// 2. Затем в этой директории необходимо инициализировать NPM проект с помощью команды npm init
// 3. И наконец можно устанавливать express с помощью команды npm install express

///2Промежуточные обработчики

//Существует два вида промежуточных обработчиков:
// * Глобальные промежуточные обработчики не привязаны к конкретному роуту
// * Локальные промежуточные обработчики определяются для конкретного роута

// Express позволяет реализовать промежуточные обработчики запроса
// Такие обработчики позволяют добавить некоторую логику перед основным обработчиком

// app.use((req, res, next) => { // Добавление информации в консоль
//     console.log('Поступил запрос', req.method, req.url);
//     next();  // вызов основного обработчика
// });

///3 Возврат html файлов
//Писать HTML в JavaScript строке не очень удобно.
// Для удобства в express существует возможность отдавать в качестве ответа html файл с помощью метода res.sendFile()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'static/index.html'));
// })

///4 Статичные файлы - это файлы, которые хранятся на сервере и доступны для загрузки и просмотра из браузера 