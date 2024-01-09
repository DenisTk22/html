/* Задание 1 (тайминг 20 минут)
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'. */
//1
// let firstName = prompt('Как Вас зовут?');
// let lastName = prompt('Как Ваша фамилия?');
// let age = Number(prompt('Сколько вам лет?'));

// function getYourData(fn, ln, a) {
//     alert(`Привет ${fn} ${ln} с возрастом ${a}`);
// }

// getYourData(firstName, lastName, age);

//2
// function squary(digit) {
//     return digit * digit;
// }

// console.log(squary(4));

//3
// let checkPositive = (number) => { // /* функция замыкания */
//     if (number > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let checkPositive2 = function(number) {
//     if (number > 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function checkPositive3(number) { // функция
//     if (number > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let checkPositive4 = checkPositive3;

// console.log(checkPositive(2));
// console.log(checkPositive2(3));
// console.log(checkPositive3(-4));
// console.log(checkPositive4(5));

/*Задание 2 (тайминг 15 минут)
1.
2.
1.
Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func(); */

// function getSum(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// let a1 = 2;
// let a2 = 3;
// let a3 = 4;

// getSum(a1, a2, a3);

// function func(num = 5) {
//     console.log(num * num);
// }

/* Задание 3 (тайминг 15 минут)
1.
2.
Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции */

// let getSumOfSquary = (number) => {
//     return Math.sqrt(number);
// }

// let a = getSumOfSquary(9);
// let b = getSumOfSquary(4);

// console.log(a + b);

// let minVal = (num1, num2) => {
//     if (num1 > num2) {
//         console.log(`минимальное число ${num2}`);
//     } else {
//         console.log(`минимальное число ${num1}`);
//     }
// }

// minVal(9, 1);

/* Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван */

let getDay = (number) => {
    switch (number) {
        case 1: 
            console.log('понедельник');
            break;
        case 2:
            console.log('вторник');
            break;
        case 3:
            console.log('среда');
            break;
        case 4:
            console.log('четверг');
            break;
        case 5:
            console.log('пятница');
            break;
        case 6:
            console.log('суббота');
            break;
        case 7:
            console.log('воскресенье');
            break;
        default:
            console.log('день не найден');
            break;
    }
}

let userChoise = Number(prompt('Введите номер дня недели'));

getDay(userChoise);