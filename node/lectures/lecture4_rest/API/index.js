///API для управления статьями
//* Инициализация NPM: npm init -y
//* Установка библиотеки express: npm i express
//* Создать файл index.js

const express = require('express');


const app = express();

const articles = [];
let uniqueID = 0;

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({ articles });
});

//роут получение статьи по идентификатору
app.get('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

//роут создание новой статьи
app.post('/articles', (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID,
    });
});

//роут обновления статьи
app.put('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

//роут удаления статьи
app.delete('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1)

        res.send({ article }); // возврат пользователю удаленной статьи
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

app.listen(3000);