/*
1. Создайте переменную num и присвойте ей значение 123. Выведите
значение этой переменной в консоль
2. Создайте переменную а и присвойте ей значение 5, переопределите
переменную а на значение 7, выведите переменную а в консоль
3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
помощью функции console.log выведите в консоль содержимое
переменной b.
4. Создайте 2 вида комментариев в вашем коде, добавьте в них
произвольный текст
*/

// let num = 123;
// console.log(num);

// let a = 5;
// a = 7;
// console.log(a);

// let b
// console.log(b);
// b = 1 + 2 + 3;
// console.log(b);

// let c = null;
// console.log(c);

/*
Задание 3 (тайминг 20 минут)
1. Создайте переменную c со значением 10 и переменную d со
значением 2.
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел
(c,d)
d. Создайте переменную прозведения и присвойте произведение
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в
консоль
*/

// const c = 10;
// const d = 2;

// let sum = c + d;
// let dif = c - d;
// let mult = c * d;
// let dev = c / d;

// console.log(sum, dif, mult, dev);

// console.log(sum + dif + mult + dev);

/*  */

// let a = 1.5;
// const b = 0.75;

// console.log(a + b);

// a = 10;
// console.log(-a);

/* Задание 6 (тайминг 15 минут)
1. Создайте строку с вашем именем и строку с вашей фамилией.
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом
'script'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом
'world'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'hello world'. */

// const myName = "Denis";
// const surName = "Tkachev";
// console.log(myName, surName);

// const j = "java";
// const scr = "script";
// console.log(j + scr);

// const text = "hello";
// const text1 = "world";
// console.log(text + " " + text1);

/* */
let a = 9;
a = "9";
a = 9;
console.log(parseFloat(a))

if (parseFloat(a) - parseInt(a) > 0) {
    console.log("float");
} else {
    console.log("int");
}