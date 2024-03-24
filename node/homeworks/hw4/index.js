///Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:
// - На каждой странице реализован счетчик просмотров
// - Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// - Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// - Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const countFile = path.join(__dirname, 'count.json')

const countObj = JSON.parse(fs.readFileSync(countFile, 'utf-8'));

app.get('/', (req, res) => {
    countObj.urlMain++;
    res.send(`<h1>Welcome!</h1> <a href="/about">About</a> <h6>На страницу зашли ${countObj.urlMain} раз(а)</h6>`);
    fs.writeFileSync(countFile, JSON.stringify(countObj, null, 2));
});

app.get('/about', (req, res) => {
    countObj.urlAbout++;
    res.send(`<h1>About me</h1> <a href="/">Main page</a> <h6>На страницу зашли ${countObj.urlAbout} раз(а)</h6>`);
    fs.writeFileSync(countFile, JSON.stringify(countObj, null, 2));
});

const port = 3000;

app.listen(port);