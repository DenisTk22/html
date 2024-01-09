// const arr = [];
// arr.push('1');
// arr.push('hello', 2)
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);

const user = [];

    // const userName = prompt('Ваше имя');
// user.push(prompt('Ваше имя'));
    // const userAge = prompt('Ваш возраст');
// user.push(Number(prompt('Ваш возраст')));
// console.log(user);

// const numbers = [2, 3, 19, 15];
// alert(numbers);
// alert(`Запомни цифры ${numbers}`);

// console.log(numbers.pop());

const word = 'example';
const arrWord = word.split('');
// console.log(arrWord.pop());
// arrWord.join();
const upWord = arrWord.pop();
console.log(upWord.toLocaleUpperCase());
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(''));

const filePath = "C:/Users/Denis/Desktop/Обучение%20GB/2_programmer/workshop/frontend/frontend"
console.log(filePath.split('/').shift());

console.log(arrWord.slice(0, 3));
console.log(arrWord.indexOf('m'));

const arrEx = [1, 2, 3];
let a = 4;
console.log(arrEx);
arrEx.push(a)
console.log(arrEx);