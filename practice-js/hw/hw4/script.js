/* Задание 1 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */
console.log('Задание 1.');

let string = " - это ноль"

for (let i = 0; i < 11; i++) {
    console.log(i + string);
    if (i % 2 == 0) {
        string = " - нечетное число"
    } else {
        string = " - четное число"
    }
};
/* Задание 2 Дан массив [1, 2, 3, 4, 5, 6, 7] 
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */
console.log('Задание 2.');

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2);
arr2.splice(3, 2)
console.log(arr2);
/*Задание 3 Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */
console.log('Задание 3.');

const arrLength = 5;
arr3 = [];
let sum = 0;
let min;

for (let i = 0; i < arrLength; i++) {
    arr3.push(parseInt(Math.random(0, 9)*10));
}
console.log(`Случайный массив: [${arr3}]`);

arr3.forEach(element => {
    sum = sum + element;
});
console.log(`Сумма эементов массива равна ${sum}`);

min = arr3[0];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < min) {
        min = arr3[i];
    }
}
console.log(`Минимальный элемент равен ${min}`);

arr3.forEach(element => {
    if (element === 3) {
        return console.log('В массиве есть число 3!');
    }
});
/* Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx*/
console.log('Задание 4.');

let str = "x";

for (let i = 0; i < 20; i++) {
    console.log(str);
    str = str + "x";
}