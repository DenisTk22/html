// const myName = 'Ира';

// hiName = (yourName) => {
//     console.log(`Привет, меня зовут ${yourName}`);
// };

// hiName(myName);

//Задание5
// Необходимо написать HTTP сервер и запустить сервер на порту 3000, который в браузере
// по URL “/” возвращает такую страницу:
// Подсказки:
// - Обязательно импортируйте модуль http для реализации сервера: const http =
//     require('http');
// - Используйте метод модуля http.createServer(): http.createServer((req, res) => { });
// - Для запуска сервера не забудьте вызвать метод.listen(): server.listen(3000);
// - Обязательно установите заголовки ответа с помощью метода res.writeHead():
// 'Content-Type': 'text/html; charset=UTF-8'
//     - Отправьте HTML код с помощью метода res.end()

//вызываем встроенную библиотеку http
const http = require('http'); //require - способ подключения

// создаем сервер
const server = http.createServer((req, res) => { // два параметра: req - запрос, res - ответ
    if (req.url === '/') { // через / обозначается корневой url
        res.writeHead(200, { // написание заголовка
            'Content-Type': 'text/html; charset=UTF-8', // тип контента text/html в кодировке UTF-8
        });
        res.end('<h1>Главная страница</h1>'); // если не вызвать метод end(), то браузер будет постоянно висеть в подключении ожидая ответа, в методе end() лучше прописать что-то наглядное. Метод end() закрывает запрос 
    } else if (req.url === '/about') { // указываем другую страницу с адресом /about
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8', 
        });
        res.end('<h1>Страница About</h1>');
    }
});

//запуск сервера

server.listen(3000); // ставим слушателя на не занятый порт, например 3000. 
//Вызов в браузере через localhost:3000 или 127.0.0.1:3000
