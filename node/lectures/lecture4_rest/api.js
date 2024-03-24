///API (Application Programming Interface) - это механизм, который позволяет двум программным компонентам взаимодействовать друг с другом, используя определенный протокол.

//REST
//● REST - это набор правил и соглашений, которые описывают, как программисту организовать API HTTP сервера.
// ● Реализация API с применением подхода REST позволяет разработчикам говорить на одном языке.
// ● Также подход REST позволяет реализовывать предсказуемые и масштабируемые API.

// Базовые правила
// ● URL должен в себе нести информацию об объекте, с которым мы работаем
// ● Роуты, которые вы реализуете, должны использовать методы GET, POST, PUT, DELETE - это действия над объектами, которые мы хотим с ними совершить

//URL, как объект
// URL должен в себе нести информацию об объекте, с которым мы работаем
// ● URL это базовая единица информации, которая говорит о том, с каким объектом мы работаем
// ● URL / articles - говорит нам о том, что этот роут позволяет работать со списком статей
// ● URL / articles / 3 - говорит о том, что этот роут позволяет работать с одной конкретной статьей под номером 3

//HTTP метод, как действие
//Методы GET, POST, PUT, DELETE - это действия над объектами
// ● GET - это метод, который позволяет получить объекты
// ● POST - это метод, который позволяет создавать объекты
// ● PUT - это метод, который позволяет обновлять объекты
// ● DELETE - это метод, который позволяет удалять объекты

//Примеры
// GET /articles - получить список статей
// GET / articles / 3 - получить третью статью
// POST / articles - создать статью
// PUT / articles / 3 - обновить третью статью
// DELETE / articles / 3 - удалить третью статью

//Взаимосвязанные объекты
// GET / articles / 3 / comments - получить список комментариев третьей статьи
// GET / articles / 3 / comments / 1 - получить первый комментарий третьей статьи
// POST / articles / 3 / comments - создать комментарий к третьей статье
// PUT / articles / 3 / comments / 1 - обновить первый комментарий третьей статьи
// DELETE / articles / 3 / comments / 1 - удалить первый комментарий третьей статьи

///Тестирование API
//Postman - это платформа для работы с API, которая позволяет разработчикам проектировать, создавать, тестировать и документировать свои API

//Как скачать Postman?
// Необходимо зайти на сайт https://postman.com и нажать на кнопку скачивания для вашей операционной системы

///Реализация API в express
//HTTP методы в express:
// const express = require('express');

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.post('/', (req, res) => {
//     res.send(req.body);
// });

// app.put('/', (req, res) => {
//     res.send(req.body);
// });

// app.delete('/', (req, res) => {
//     res.send(req.body);
// });

// app.listen(3000);

///Метод POST
// const express = require('express');

// const app1 = express();

// app1.use(express.json()); // к пункту 2

// app1.post('/', (req, res) => {
//     console.log(req.body); // к пункту 2
//     res.send("<h1>This is a post reques!</h1>");
// });

// app1.listen(3000);

//2 Получение тела запроса
// см код выше
// В postman выбрать Body --> raw --> JSON --> ввести json данные

///Метод PUT
// const express = require('express');

// const app2 = express();

// app2.use(express.json());

// app2.put('/', (req, res) => {
//     console.log(req.body); // к пункту 2
//     res.send("<h1>This is a post reques by PUT!</h1>");
// });

// app2.listen(3000);

///Метод DELETE. Не нужно использовать тело запроса в методе DELETE
const express = require('express');

const app3 = express();

app3.use(express.json());

app3.delete('/', (req, res) => {
    console.log(req.body); // к пункту 2
    res.send("<h1>This is a reques by DELETE!</h1>");
});

app3.listen(3000);