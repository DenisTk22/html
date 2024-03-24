//Задание №3
// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json

const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'person.json') // __dirname - путь до текущего файла, его нужно склеить с названием файла, чтобы получить путь к файлу
console.log(jsonPath);

const person = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

person.age = person.age - 10;
person.city = "Ekaterinburg";

fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2));