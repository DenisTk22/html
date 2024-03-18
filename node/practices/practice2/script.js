
///Задание №1
// Необходимо найти, установить и применить библиотеку, которая позволитизбежать проблем со сложением и умножением чисел с плавающей запятой

// const np = require('number-precision');

// function calculateResultSum(puschases, discount) {
//     let total = puschases.reduce((acc, puschase) => np.plus(acc += puschase) , 0);

//     total = total * discount;
//     return total;
// };

// с использованием библиотеки:

// function calculateResultSum(puschases, discount) {
//     let total = puschases.reduce((acc, puschase) => np.plus(acc, puschase), 0);

//     total =  np.times(total, discount);
//     return total;
// }

// const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

// console.log('Общая стоимость покупок: ' + total + ' рублей');

///Задание №2
// 1. Необходимо вынести функцию.calculateResultSum() в отдельный файл, импортировать её в основной файл и использовать.
// 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM, для того, чтобы можно было запускать скрипт с помощью команды npm run start.

// const { calculateResultSum } = require('./calculateResultSum');

// const total1 = calculateResultSum([12.1, 32.2, 43.1], 0.7);

// console.log('Итого стоимость покупок: ' + total1 + ' рублей');

///Задание №3
// - Найти библиотеку, которая поможет окрасить текст в терминале
// - Применить возможности библиотеки и окрасить сообщение о стоимости покупок красным, если стоимость больше 50 рублей и зеленым, если стоимость менее 50 рублей
require('colors');

const { calculateResultSum } = require('./calculateResultSum');

const total2 = calculateResultSum([12.1, 32.2, 43.1], 0.7);
const resultText = `Общая стоимость покупок: ${total2} рублей`;
console.log(total2 > 50 ? resultText.red : resultText.green);

///