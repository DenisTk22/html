//В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
const buttonEl = document.querySelector('.button');

// document.addEventListener('DOMContentLoaded', function (e) {
//     console.log('страница загрузилась');
// });


window.addEventListener('load', function (e) {
    console.log('страница загрузилась');
});

buttonEl.onclick = () => {
    console.log('событие onclick');
};

buttonEl.addEventListener('click', function(e) {
    console.log('событие addEventListener');
});

buttonEl.onclick = () => {
    console.log('событие onclick2');
};

buttonEl.addEventListener('click', function (e) {
    console.log('событие addEventListener2');
});

/*Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку” */

const button1Els = document.querySelectorAll('.button1');

button1Els.forEach(element => {
    element.addEventListener('click', function (e) {
        console.log(e.target);
    })
});

const buttonEl4 = document.querySelector('.button4');
let count = 0;

buttonEl4.onclick = () => {
    count++;
    if (count === 2 || count === 3 || count === 4) {
        console.log(`Количество нажатий ${count} раза`);
    } else {
        console.log(`Количество нажатий ${count} раз`);
    }
    
}

const buttonEl5 = document.querySelector('.button5');

buttonEl5.onclick = () => {
    buttonEl5.textContent = 'Вы нажали на эту кнопку'
}

/*Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
Создать вторую кнопку, которая будет удалять созданный заголовок h1
Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет” */

const buttonEl6 = document.querySelector('.button6');
const titleEl = document.querySelector('.title');
const buttonEl7 = document.querySelector('.button7');
const buttonEl8 = document.querySelector('.button8');
const buttonEl9 = document.querySelector('.button9');
let counter = 0;
const footerEl = document.querySelector('.footer');

buttonEl6.onclick = () => {
    titleEl.textContent = 'Новый заголовок';
}

buttonEl7.onclick = () => {
    titleEl.textContent = '';
}

footerEl.style.width = '100%';
footerEl.style.height = '100px';
footerEl.style.border = '1px solid black';
footerEl.style.marginTop = '50px';

buttonEl8.addEventListener('mouseover', function (e) {
    console.log('Вы навели на данную кнопку');
    footerEl.style.backgroundColor = 'green';
});

buttonEl8.addEventListener('mouseleave', function (e) {
    console.log('Наведения на кнопку больше нет');
    footerEl.style.backgroundColor = 'white';
});


buttonEl9.addEventListener('click', function (e) {
    counter++;
    if (counter % 2 !== 0)
    {
      buttonEl9.textContent = 'Товар добавлен'  
    } else {
        buttonEl9.textContent = 'Купить' 
    }
});

/*Создать в html список состоящий из 3-х произвольных элементов li
Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click” */

const listEls = document.querySelector('.list');
const listLength =  listEls.children.length;
let counterNewItem = listLength + 1;
const buttonEl10 = document.querySelector('.button10');
const buttonEl11 = document.querySelector('.button11');
const buttonEl12 = document.querySelector('.button12');

buttonEl10.addEventListener('click', function (e) {
    const newLi = document.createElement('li');
    newLi.textContent = `newList-${counterNewItem}`;
    listEls.append(newLi);
    counterNewItem++;
    newLi.classList.add('item');
});

buttonEl11.addEventListener('click', function (e) {
    const listEl = document.querySelector('.item');
    listEl.remove();
})

buttonEl12.addEventListener('click', function (e) {
    buttonEl12.classList.add('click');
})