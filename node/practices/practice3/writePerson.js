//Задание №2
// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории запускаемого скрипта и запишет в файл следующий объект:
`{
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 30,
    "city": "Moscow"
}`

const fs = require('fs');
const path = require('path');

// const person = {
//     name: "Ivan",
//     surname: "Ivanov",
//     age: 30,
//     city: "Moscow"
// }

const jsonPath = path.join(__dirname, 'person.json') // __dirname - путь до текущего файла, его нужно склеить с названием файла, чтобы получить путь к файлу
console.log(jsonPath);

//запись в файл в синхронхронном вызове
fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2)); // 2(размер табуляции - кол-во пробелов) - Добавляет форматирование
