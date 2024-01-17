//<div class="block">
// </div >
//     Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1(использовать setAttribute)

const blockEL = document.querySelector('.block');
const itemEL = document.querySelector('.item');
itemEL.textContent = 'Элемент внутри';
const divEL = document.createElement('div');
// divEL.classList.add('item');

itemEL.style.color = 'blue';
itemEL.style.border = '1px solid black';
itemEL.style.backgroundColor = '#f8f8f8';
itemEL.style.padding = '16px';

itemEL.setAttribute('class', 'item item_1'); 

/*при клике на кнопку удаляются стили - доп */


//Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const pEl = document.querySelector('.text');
// console.log(pEl);
// console.log(pEl.previousElementSibling);
// console.log(pEl.parentElement);
// console.log(pEl.parentElement.previousElementSibling);
// console.log(pEl.parentElement.parentElement);

/*При клике на кнопку, после параграфа добавляется див с текстом, вы нажали на кнопку - доп */

/*С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей */

const subtitleEl = document.querySelector('.subtitle');
let parentNext = subtitleEl.parentElement

while (parentNext !== null) {
    console.log(parentNext);
    parentNext = parentNext.parentElement
}

/*Создать кнопку, при клике на которую, на страницу выводятся названия всех родительких тегов h2 - доп */

/* Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
У поля ввода должна появиться рамка красного цвета*/

const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('.btn');
const inputEl = document.querySelector('.textIn');
console.log(inputEl.textContent);

buttonEl.onclick = function () {
    // attantionEl.textContent = '';
    if (inputEl.value === '') {
        const attantionEl = document.createElement('h2');
        attantionEl.textContent = 'Вы не заполнили поле ввода!';
        formEl.appendChild(attantionEl);
        inputEl.style.borderColor = 'red';
    }
    
}