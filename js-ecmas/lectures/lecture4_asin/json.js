///Формат данных JSON
// В мире Web есть множества форматов данных с помощью которых мы можем кодировать информацию для отправки на сервер или для получения данных с сервера: XML, простой текст, JSON, двоичные данные.Раньше был достаточно популярным формат XML, но в скором времени его сменил очень простой и удобный формат JSON.

// JSON - JavaScript object notation или описание данных подобно объекту JavaScript.
// Этот формат данных очень сильно похож на объекты JavaScript за небольшими исключениями:
// ● Все ключи JSON объекта должны быть взяты в кавычки,
// ● Значения ключей - это примитивные типы, массив или объект.В нем не может быть функций,
// ● В JSON объекте не допускаются комментарии,
// ● В конце каждой группы ключей или элементов массивов нельзя ставить запятую - будет ошибка объекта.
// Формат JSON был создан для удобной передачи данных из одного языка программирования в другой, так ваш клиентский код на JavaScript форматирует данные в виде JSON и отправляет на сервер, где эти данные могут обрабатываться сервером, написанном на языке Go, Ruby или PHP.Как оказалось этот формат очень удобен для работы клиентских приложений, и большинство взаимодействий с серверами идет в этом формате.Для удобства работы с данными в этом формате в JavaScript Есть объект JSON и несколько методов для преобразования данных в него и из него в настоящий объект JavaScript.
//JSON.stringify
// Метод stringify позволяет преобразовать JavaScript объект в строковое представление в JSON формате.Этот очень полезный метод применяется перед отправкой данных на сервер.Также этот метод позволяет сохранить данные в виде объекта из JavaScript в текстовый файл, например логи работы программы.Этот метод принимает 3 аргумента.Первый, обязательный аргумент - это сам объект который будет преобразован.Второй - это функция обратного вызова, которая будет вызвана рекурсивно для всех ключей / значений объекта и которая позволяет модифицировать данные при необходимости прямо во время конвертации.Третий - это количество пробелов, которые будут использоваться для формирования отступов внутри строки, чтобы сохранить вид как в коде.

// Листинг 8
// Объект -> JSON.
const student = {
    name: 'Slava',
    surname: 'Belkin',
    age: 20,
    practice: {
        place: 'IKTG',
        hours: 47,
    }
};
console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Обратите внимание, что все ключи стали обернуты в кавычки.
`{
    "name": "Slava",
        "surname": "Belkin",
            "age": 20,
                "practice": {
        "place": "IKTG",
            "hours": 47
    }
}`
// JSON.parse
// Метод parse делает обратную процедуру, принимая строку в качестве аргумента, метод пытается распарсить её как строку формата JSON и превратить в объект JavaScript(или массив).

//     Листинг 8
// JSON -> Объект.
console.log(JSON.parse('{"name": "Slava", "surname": "Belkin", "age": 20, practice: { "place": "IKGT", "hours": 47 }}'));

`{
name: 'Slava',
surname: 'Belkin',
age: 20,
practice: {
place: 'IKTG',
hours: 47,
__proto__: Object
},
__proto__: Object
}`
console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); //
["Belkin", "Ivanov", "Petrov"]
// Мы успешно преобразовали строку с объектом в реальный объект JavaScript, а также строку с массивом в массив. Если строка не будет соответствовать формату JSON, то вы получите синтаксическую ошибку, поэтому такие операции для безопасности лучше всего оборачивать в конструкцию try/catch.