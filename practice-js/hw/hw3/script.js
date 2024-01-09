/*Задание 1 Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени */
console.log('Задание 1.');
const getCube = (number) => { return Math.pow(number, 3);};

console.log(`Два в кубе = ${getCube(2)}`);
console.log(`Три в кубе = ${getCube(3)}`);
/* Задание 2 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно/ Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение" */
console.log('Задание 2.');
let userNumber = Number(prompt('Введите полученные деньги:'));
let getSalary = (money) => { console.log(`Размер заработной платы за вычетом налогов равен ${money * 0.87} рублей`);};

if(isNaN(userNumber) == false){
    console.log(`Вы ввели ${userNumber}`);
    getSalary(userNumber);
    } else { alert('Введите цифры!');};
/* Задание 3 Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел */
console.log('Задание 3.');
let userNumber1 = Number(prompt('Введите первое число:'));
let userNumber2 = Number(prompt('Введите второе число:'));
let userNumber3 = Number(prompt('Введите третье число:'));

const getMax = (num1, num2, num3) => { // 1 3 2
    let max = num1;
    if (num1 < num2) { max = num2; }
    if (max < num3) { max = num3; }
    console.log(`Из чисел ${num1}, ${num2}, ${num3} максимальное число ${max}`);};
getMax(userNumber1, userNumber2, userNumber3);
/* Задание 4 Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них): 1. Сложение 2. Разность 3. Умножение 4. Деление */
console.log('Задание 4.');
let foCalc1 = Number(prompt('Введите первое число:'));
let foCalc2 = Number(prompt('Введите второе число:'));
console.log(`Вы ввели ${foCalc1} и ${foCalc2}`);

const getSum = (num1, num2) => { return console.log(`Сумма чисел равна ${num1 + num2}`); };
const getDif = (num1, num2) => {
    if (num1 > num2) { return console.log(`Разность чисел равна ${num1 - num2}`);
    } else { return console.log(`Разность чисел равна ${num2 - num1}`);} };
const getDiv = (num1, num2) => { return console.log(`Деление чисел равно ${num1 / num2}`);};
const getMult = (num1, num2) => { return console.log(`Произведение чисел равно ${num1 * num2}`);};
getSum(foCalc1, foCalc2);
getDif(foCalc1, foCalc2);
getDiv(foCalc1, foCalc2);
getMult(foCalc1, foCalc2);