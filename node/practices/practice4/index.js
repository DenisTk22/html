const express = require('express');
const fs = require('fs'); // для работы с файлами
const path = require('path');
const Joi = require('joi');

/**
 * Правила валидации
 */
const userScheme = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(2),
})

let uniqueID;

const userDbPath = path.join(__dirname, 'users.json'); // получение пути к файлу

const app = express();

app.use(express.json());

/**
 * Присвоение id
 */
const usersId = JSON.parse(fs.readFileSync(userDbPath));
if (usersId) {
    uniqueID = usersId.length;
} else { uniqueID = 0; }

/**
 * Вывод всех пользователей
 */
app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath)); // кодировка по умолчанию utf-8
    res.send({users}); // положили объект {users} или users:users
});

/**
 * Получение пользователя по id
 */
app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    const findUser = users.find((user) => user.id === Number(req.params.id));
    res.send({ user: findUser }); // положили объект {users} или users:users
});

/**
 * Добавление нового пользователя
 */
app.post('/users', (req, res) => {
    const result = userScheme.validate(req.body);

    if (result.error) {
        return res.status(404).send({error: result.error.details});
    }

    uniqueID++;
    const users = JSON.parse(fs.readFileSync(userDbPath));
    users.push({ id: uniqueID, ...req.body }); // обращение к содержимому body
    fs.writeFileSync(userDbPath, JSON.stringify(users));
    res.send({ id: uniqueID, });
});

/**
 * Обновление пользователя
 */
app.put('/users/:id', (req, res) => {
    const result = userScheme.validate(req.body);

    if (result.error) {
        return res.status(404).send({error: result.error.details});
    }

    const users = JSON.parse(fs.readFileSync(userDbPath));
    const findUser = users.find((user) => user.id === Number(req.params.id));
    if (findUser) {
        findUser.firstName = req.body.firstName;
        findUser.lastName = req.body.lastName;
        findUser.city = req.body.city;
        findUser.age = req.body.age; 
        fs.writeFileSync(userDbPath, JSON.stringify(users));
        res.send({ user: findUser }); // положили объект {users} или users:users
        } else {
        res.send({ User: "User is not found!" });
        }
});

/**
 * Удаление пользователя по id
 */
app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath));
    const findUser = users.find((findUser) => findUser.id === Number(req.params.id));

    if (findUser) {
        const userIndex = users.indexOf(findUser);
        users.splice(userIndex, 1);
        fs.writeFileSync(userDbPath, JSON.stringify(users));
        res.send({ findUser }); // возврат удаленного пользователя
    } else {
        res.status(404);
        res.send({ User: "User is not found!" });
    }
});

/**
 * Обработка введения несуществующих URL
 */
app.use((req, res) => {
    res.status(404).send({
        message: 'Data is not found!'
    })
});


const post = 3000;
app.listen(post);