const heading2 = document.getElementById('heading') //устаревший способ
console.log(heading2);

const heading3 = document.querySelector('#heading') // современный способ
console.log(heading3);

const listEls = document.getElementsByClassName('list');
console.log(listEls);

const listElsQS = document.querySelectorAll('.list');
console.log(listElsQS);

const heading = document.querySelector('.title'); // querySelector - найди селектор
const text = document.querySelectorAll('.text');

const paragraphElement = document.createElement('p'); // создаем элемент
paragraphElement.textContent = 'Новый текст параграфа'; //добавляем в элемент текст

const headingH3 = document.createElement('h3');
headingH3.textContent = 'Мой первый заголовок h3';

// Замена содержимого в элементе
const titleEl = document.querySelector('.title');
titleEl.textContent = 'Заголовок из js';

titleEl.appendChild(paragraphElement); // добавляем дочерний элемент

// Добавление текстового узла в новый абзац
const paragraphElementText = document.createTextNode('Содержимое текстовой ноды');
paragraphElement.appendChild(paragraphElementText);

// Удаление элемента
const headingRemove = document.querySelector('#heading');
headingRemove.remove();

//Замена узла
const divElement = document.createElement('div'); // создаем элемент div
const paragraphElement1 = document.createElement('p'); // создаем элемент p
divElement.appendChild(paragraphElement1); // добавляем элемента div вложенный элемнт p

const spanElement = document.createElement('span');
const strongElement = document.createElement('strong');
// paragraphElement1.replaceWith(spanElement, strongElement);

// console.log(divElement.outerHTML);

//спросить на уроке
const replaceToSrong = document.querySelector('.text');
console.log(replaceToSrong);
replaceToSrong.replaceWith(spanElement, strongElement);

// по клику

const buttonEl = document.querySelector('.btn');
const contentEl = document.querySelector('.content');
const imgEl = document.querySelector('.image');

imgEl.onclick = function() {
    imgEl.src = 'newphoto.jpg';
}


const textEl = document.createElement('p');
textEl.textContent = 'Тут много текста';

buttonEl.onclick = function () {
    console.log('Клик js');
    buttonEl.textContent = 'Товар в корзине';
    contentEl.appendChild(textEl);
}

// картинка




// text.forEach(element => {
//     console.log(element);
// });
// console.log(heading);
// console.log(text);