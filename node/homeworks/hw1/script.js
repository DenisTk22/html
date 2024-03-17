//Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов(404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');

let countMainPage = 0;
let countAboutPage = 0;
let countfzf = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        countMainPage++;
        res.end(`<h1>Добро пожаловать на мой сайт!</h1> 
                 <a href='/about'>Перейти на страницу "Обо мне"</a> <br>
                 <a href='/fzf'>Тупануть</a>
                 <h6>На страницу зашли ${countMainPage} раз(а)</h6>`);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        countAboutPage++;
        res.end(`<h1>Страница Обо мне</h1> 
                 <a href='/'>Перейти на главную страницу</a> <br>
                 <a href='/fzf'>Тупануть</a>
                 <h6>На страницу зашли ${countAboutPage} раз(а)</h6>`);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        countfzf++;
        res.end(`<h1>Страница не найдена!</h1>
                 <a href='/'>Перейти на главную страницу</a> <br>
                 <a href='/about'>Перейти на страницу "Обо мне"</a> <br>
                 <h6>Тупанули ${countfzf} раз(а)</h6>`)
    }
});

server.listen(3000);