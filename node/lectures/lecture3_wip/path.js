///Модуль path - модуль помогает работать с путями в файловой системе

const path = require('path');

//Выведет в консоль путь /User/Student/Desktop/index.js
console.log(path.join('/User/Student', 'Desktop/index.js'));
//Выведет в консоль ОБЪЕКТ пути
console.log(path.parse('/User/Student/Desktop/index.js'));
//Выведет в консоль путь к директории, убрав название файла
console.log(path.dirname('/User/Student/Desktop/index.js'));
//Выведет в консоль расширение файла .js
console.log(path.extname('/User/Student', 'Desktop/index.js'));