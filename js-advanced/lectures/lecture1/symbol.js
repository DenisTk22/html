///Тип данных Symbol
// const symbol = Symbol(); // объявление

// const dogID = Symbol('dog'); //значение уникально, даже если мы создадим несколько символов с одинаковым описание

// const dog1 = Symbol('dog');
// const dog2 = Symbol('dog');

// console.log(dog1);
// console.log(dog2);

// console.log(dog1 === dog2); // false

///
// const dogID = Symbol('dog');
// alert(dogID); // TypeError: Cannot convert a Symbol value to a string
// console.log(dogID); // Symbol(dog)

// console.log(dogID.description); //dog можно посмотреть описание

// let id = Symbol('dogID');

// let buddy = {
//     [id]: 'Жучка'
// }

// console.log(buddy[id]); // Жучка

///
// let id = Symbol('id');
// buddy[id] = "Бобик"; //Идентификатор создается всегда

// // // Проблемы которых могут возникнуть, без использовать Symbol
// let buddy = { name: 'Тузик'}; // Объявляем в нашем скрипте свойство 'id'
// buddy.id = 'Наш идентификатор'; //... другой скрипт тоже хочет свой идентификатор...
// buddy.id = 'Их идентификатор'; // Свойство перезаписано сторонней библиотекой

//Как решить?

// let buddies = {
//     [Symbol('Жучка')]: 'Жучка',
//     [Symbol('Мурка')]: 'Мурка',
//     [Symbol('Таракашка')]: 'Таракашка',
//     elephant: 'Слон'
// }


// console.log(buddies);

// buddies.cat = 'Masya';

// let newBuddies = {};

// Object.assign(newBuddies, buddies); // Object.assign скопирует все свойства, в том числе и символьные

// console.log(newBuddies);

/// Symbol.for
//Читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for('id'); // если символа не существует, он будет создан

//читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for('id');

alert(id === idAgain); // true

/// Symbol.keyFor - описание символа по идентификатору
// получаем символ по имени

let sym = Symbol.for("name");
let sym2 = Symbol.for('id');

//получаем имя по символу
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id