// const fs = require('fs');
// const path = require('path');

const express = require('express');
const { engine } = require('express-handlebars'); // для пункта 2, вызываем функцию engine у express-handlebars; --> npm i express-handlebars
// const handlebars = require('handlebars');
const app = express();

app.engine('handlebars', engine()); // для пункта 2
app.set('view engine', 'handlebars'); // для пункта 2
app.set('views', './views'); // для пункта 2, указываем директорию для шаблонов


const articles = [
    { title: 'Article 1', description: 'First awesome article' },
    { title: 'Article 2', description: 'Second awesome article' },
    { title: 'Article 3', description: 'Third awesome article' }
];

// app.get('/', (req, res) => {
//     const pathToTemplate = path.join(
//         __dirname,
//         '/templates/home.handlebars'
//     );
//     fs.readFile(pathToTemplate, 'utf8', (err, data) => {
//         if (err) {
//             res.status(500);
//             res.send(err.message);
//         } else {
//             const template = handlebars.compile(data);
//             res.send(template({ articles }))
//         }
//     });
// });

app.get('/', (req, res) => {
    res.render('home', { layout: 'index', title: 'Home', articles })
});

app.listen(3000);

//2 Упрощение с помощью Библиотеке express-handlebars