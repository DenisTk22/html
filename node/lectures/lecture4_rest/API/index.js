///API для управления статьями
//* Инициализация NPM: npm init -y
//* Установка библиотеки express: npm i express
//* Создать файл index.js

const express = require('express');
// const Joi = require('joi');
const { checkParams, checkBody } = require('./validation/validator');
const { idScheme, articleScheme } = require('./validation/scheme');

const app = express();

const articles = [];
let uniqueID = 0;

app.use(express.json());

/**
 * Получить все статьи
 */
app.get('/articles', (req, res) => {
    res.send({ articles });
});

/**
 * роут получение статьи по идентификатору
 */
app.get('/articles/:id', checkParams(idScheme), (req, res) => { // checkParams(idScheme)промежуточный обработчик
    // const idValidationResult = idScheme.validate(req.params);
    // if (idValidationResult.error) {
    //     return res.status(400).send(idValidationResult.error.details);
    // }

    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({ article });
    } else {
        res.status(404);
        res.send({ article: null });
    }
});

/**
 * роут создание новой статьи
 */
app.post('/articles', checkBody(articleScheme), (req, res) => {
    // const articleValidationResult = articleScheme.validate(req.body);
    // if (articleValidationResult.error) {
    //     return res.status(400).send(articleValidationResult.error.details);
    // }

    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID,
    });
});

/**
 * роут обновления статьи
 */
app.put('/articles/:id', checkParams(idScheme), checkBody(articleScheme), (req, res) => {
    // const idValidationResult = idScheme.validate(req.params);
    // if (idValidationResult.error) {
    //     return res.status(400).send(idValidationResult.error.details);
    // }

    // const articleValidationResult = articleScheme.validate(req.body);
    // if (articleValidationResult.error) {
    //     return res.status(400).send(articleValidationResult.error.details);
    // }

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

/**
 * роут удаления статьи
 */
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

/**
 * Промежуточный обработчик, для обработки обращения к несуществующим роутам
 */
app.use((req, res) => {
    res.status(404).send({
        message: 'URL not found!'
    })
});

app.listen(3000);