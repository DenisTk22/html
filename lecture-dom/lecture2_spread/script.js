/// Управление стилями
// inline стили, добавляются на сам элемент. HTMLElement.style

const divElement = document.createElement('div');
const paragraphElement = document.createElement('p');
divElement.appendChild(paragraphElement);

// paragraphElement.textContent = 'HTMLElement.style';

// paragraphElement.style.color = 'white';
// paragraphElement.style.backgroundColor = 'black';
// paragraphElement.style.padding = '10px';
// paragraphElement.style.width = '250px';
// paragraphElement.style.textAlign = 'center';

//Динамическое управление стилями
paragraphElement.setAttribute('class', 'paragraphName');



const content = document.querySelector('.content');

const h1El = document.createElement('h1');
h1El.textContent = 'h1 Element';
h1El.style.backgroundColor = '#ccc'; // inline стиль имеет приоритет над стилями в теге style
h1El.style.textAlign = 'center';
h1El.setAttribute('class', 'heading'); // назначение элемнету h1El (заголовок h1) атрибутов класса heading


const imgEl = document.createElement('img');
imgEl.scr = 'photo.png';
// imgEl.alt = 'тут фото';
imgEl.setAttribute('alt', 'крутое фото');

content.appendChild(h1El);
content.appendChild(imgEl);

///Интерфейс коллекций DOM. NodeList / HTMLCollection
const liEl = document.querySelectorAll('.menu__list'); // получим коллекцию в виде NodeList
const liElOne = document.querySelector('.menu__list');
const linkEL = document.querySelector('.menu__link');
const menuEl = document.querySelector('.menu');

console.log(liEl); // получаем NodeList
console.log(liElOne);
console.log(liElOne.parentNode.childNodes); // получим коллекцию в виде NodeList
console.log(liElOne.parentNode.children); // получим коллекцию в виде HTMLCollection

console.log(liEl.parentNode); // --> undefined, у NodeList нельзя определить parentNode

console.log(linkEL.children); // --> HTMLCollection с length = 0
console.log(linkEL.childNodes); // --> NodeList[text] с length = 1

console.log(menuEl.children); // --> HTMLCollection, нельзя применить foreach (нельзя применить методы массивов)

console.log(menuEl.childNodes); // --> NodeList, содержит также элементы text, данный элемент text сожержит только пробелы с переносом строки: (textContent: "\n        ")
menuEl.childNodes.forEach(element => { // к NodeList можно применить forEach
    console.log(element);
});

/// Методы для навигации по дереву DOM
// console.log(liElOne);
console.log(liElOne.parentElement.lastElementChild); // попадет только элемент
console.log(liElOne.parentElement.lastChild); //может попасть и пробел и перенос строки
console.log(liElOne.parentElement.firstElementChild); 
console.log(liElOne.nextElementSibling); // найти следующий блок
console.log(liElOne.nextElementSibling.nextElementSibling); // найти следующий (третий) блок
console.log(liElOne.previousElementSibling); // --> null
console.log(liElOne.parentElement.lastElementChild.previousElementSibling); // нашел родителя, в нем нашел последний элемент и нашел предыдущий элемент (link3)

// Для родительского элемента parentNode и parentElement практически всегда возвращают один и тот же элемент, за исключением случаев, когда parentNode элемента не DOM Element. В таком случае parentElement возвращает null.

document.body.parentNode // Элемент <html>
document.body.parentElement // Элемент <html>
document.documentElement.parentNode // Нода document
document.documentElement.parentElement // null
(document.documentElement.parentNode === document) // true
(document.documentElement.parentElement === document) // false