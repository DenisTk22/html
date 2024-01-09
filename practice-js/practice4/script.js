//1
const arr = [1, 2, 3];

arr.forEach(element => {
    console.log(element);
});

//2
const arr1 = [1, 2, 3];

console.log(arr1.length);

//3
const arr3 = ['a', 'b', 'c'];

console.log(arr3);
arr3[0] = 1;
arr3[1] = -2;
arr3[2] = -3;
console.log(arr3);

//21 Увеличте каждый элемент на 1
const arr21 = [1, 2, 3];

for (let i = 0; i < arr21.length; i++) {
    arr21[i]++
}

console.log(arr21);

//22 Узнать длину массива

const arr22 = [];
arr22[3] = 'a';
arr22[8] = 'b';
console.log(arr22);

//23 Добавить элементы
const arr23 = [1, 2, 3];
console.log(arr23);
arr23.push(4);
arr23.push(5);
console.log(arr23);

//24

const arr24 = [1, 2, 3, 4, 5];

arr24.pop();
arr24.pop();

console.log(arr24.length);

//31

// for (let i = 1; i < 100; i = i+2) {
//     console.log(i);
// }

//34
let count = 0;
let num = 15;
while (num < 1000) {
    num = num * 3;
    count++;
}
console.log(num, count);

//41
const arr41 = [2, 5, 9, 15, 1, 4]


arr41.map(value => {
    if (value > 3 && value < 10)
        {console.log(value);}
});

//42
const arr42 = [2, 5, 9, 3, 1, 4];
let sum = 0;

// arr42.forEach(function (value) {
//     sum = sum + value;
// });

arr42.forEach((value) => {
    sum = sum + value;
});

console.log(sum);

//43
let str = "-";

for(let i = 1; i <= 9; i++) {
    str = str + i + "-";
}

console.log(str);

//44

const arr44 = [2, 5, 9, 0, 1, 4];

let currelement = null;
let i = 0;

while (arr44[i] !== 0 && i < arr44.length) {
    console.log(arr44[i]);
    i++;
}

//51 если число делится на 2, то возвести в квадрат, если на 3, то в куб
const arr51 = [2, 5, 9, 0, 1, 4];

const arrNew = arr51.map(value => {
    return value % 2 === 0 ? Math.pow(value, 2) : (value % 3 === 0 ? Math.pow(value, 3) : value)
});

console.log(arrNew);

//55 

const arr55 = [1, 2, 3, 4, 5];

arr55.splice(1, 2);

console.log(arr55);