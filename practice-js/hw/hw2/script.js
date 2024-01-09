/*Задание 1. Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/
console.log('Задание 1.');
let num1 = Number(prompt('Введите первое число:'));
let num2 = Number(prompt('Введите второе число:'));

console.log(`Вы ввели ${num1} и ${num2} и это:`);

if ((num1 <= 1) && (num2 >= 3)) {
    console.log('Попал!');
} else {
    console.log('Мимо!');
}
/*Задание 2. Перепишите код к тернарному оператору
let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}*/
console.log('Задание 2.');
let test = true;
(test === true) ? console.log('+++') : console.log('---');
/*Задание 3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
console.log('Задание 3.');

let day = Number(prompt('Введите число месяца:'));
console.log(`Вы ввели ${day} и попали.. `);

if (day <= 10) {
    console.log('... в первую декаду!');
} else if (day > 10 && day <= 20) {
    console.log('... во вторую декаду!');
} else {
    console.log('... в третью декаду!');
}
/*Задание 4. Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.*/
console.log('Задание 4.');
let x = Number(prompt('Введите целое положительное число:'));
console.log(`Вы ввели ${x}`);
let ones = x % 10;
let temp = parseInt(x / 10);
let tens = temp % 10;
temp = parseInt(temp / 10);
let hundreds = temp % 10;
console.log(`В числе ${x} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${ones}`);