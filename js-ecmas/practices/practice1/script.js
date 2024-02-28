// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов.Используйте spread оператор для объединения массивов.
//     mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
//     removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

const arr1 = [2, 's', 3, 9];
const arr2 = [5, 't', 'e'];

function mergeArrays(array1, array2) {

    return [...array1, ...array2]
}

console.log(mergeArrays(arr1, arr2));

function removeDuplicates(...values) {

    return values.filter((value, index) => values.indexOf(value) === index);
    
}

console.log(removeDuplicates(1, 2, 1, 2, 3));

// Чистые функции
// Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
// Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
// Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

const arr3 = [2, 1];

function getEvenNumbers(array) {
    return array.filter(num => num % 2 === 0)
}

console.log(getEvenNumbers(arr3));

function calculateAverage(array) {
    
    const sum = array.reduce((acc, num) => acc + num, 0);

    return sum / array.length;
}

console.log(calculateAverage(arr3));

const text = 'apachi for us'

function capitalizeFirstLetter(string) {

    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetter(text));

//Замыкание
// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract.Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.Значение должно быть доступно только через методы объекта, а не напрямую.

// const createCalculator = (a) => {
    
//     const b = 10;

//     let calculator = {
//         add: function () {
//             return b + a;
//         },

//         subtract: function () {
//             return b - a;
//         }
//     } 
//     return calculator;
// }

// const calculator = createCalculator(2);

// // console.log(calculator.add());
// // console.log(calculator.subtract());

// const addEl = document.querySelector('.add');
// const subtractEl = document.querySelector('.subtract');

// addEl.addEventListener('click', function (e) {
//     console.log(calculator.add());
// });

// subtractEl.addEventListener('click', function (e) {
//     console.log(calculator.subtract());
// });


/// другое решение
// function createCalculator(initialValue) {
//     let value = initialValue;

//     return {
//         add: function (num) {
//             value += num;
//             console.log(value);
//         },
//         subtract: function (num) {
//             value -= num;
//             console.log(value);
//         },
//         getValue: function () {
//             return value;
//         }
//     };
// }

// let calculator = createCalculator(10);

// document.getElementById('add').addEventListener('click', function () {
//     calculator.add(5);
// });

// document.getElementById('subtract').addEventListener('click', function () {
//     calculator.subtract(3);
// });

// Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (passLength) => {

    return function passCheck(password) {
        return password.length < passLength;
    };
}


const isPasswordValid = createPasswordChecker(8);

console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));