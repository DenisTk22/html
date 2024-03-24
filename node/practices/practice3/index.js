//Задание №4
// 1. Инициализируйте проект NPM. --> npm init -y
// 2. Установите библиотеку express. --> npm i express
// 3. Создайте файл index.js.
// 4. В файле напишите код который реализует два обработчика по URL “/” и URL “/about”.
// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка на соседнюю страницу.

const express = require('express');
const app = express();

app.use(express.static('static')); // подклчение static

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome!</h1> <a href="/about">About</a>');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About me</h1> <a href="/">Main page</a>');
// });

app.listen(3000);

// Задание №5
// 1. Инициализируйте проект NPM.
// 2. Установите библиотеку express.
// 3. Создайте файл index.js.
// 4. Подключите промежуточный обработчик express.static().
// 5. В директории со статичными файлами создайте два HTML файла index.html и about.html и напишите в них HTML код в котором есть ссылки на соседние файлы.
