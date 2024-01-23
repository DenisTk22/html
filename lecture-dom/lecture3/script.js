
const buttonEl = document.querySelector('.button');
let count = 0;
let counter = 0;

const click = () => {
    console.log('click click');
}

buttonEl.onclick = () => {
    console.log('Click js button');
}


//работать будет только данный onclick, надпись Click js button появляться не будет
buttonEl.onclick = () => {
    count++;
    console.log(`Кликов по кнопки ${count}`);
}

// сработает в любом случае
buttonEl.addEventListener('click', function (e) {
    console.log('click add');
});

buttonEl.onclick = click; // вызов функции без скобок

buttonEl.addEventListener('click', click);

/// Удаление и добавление слушателя события

const button2 = document.querySelector('.button2');
const onceListener = () => {
    console.log('Будет вызван только один раз с включенной опцией "once"');
};

const onceListenerManual = (event) => {
    console.log('Будет вызван только один раз и удален вручную через вызов removeEventListener');
    event.target.removeEventListener('click', onceListenerManual);
};

button2.addEventListener('click', onceListener, {once: true});
button2.addEventListener('click', onceListenerManual);

/// Несколько одинаковых обработчиков события
// Если зарегистрировано несколько одинаковых EventListener на одном EventTarget с одинаковыми параметрами, дублирующиеся обработчики игнорируются

/// Делигирование событий. event.target
// На примере списка, вместо установки слушителя событий на каждый элемент списка, лучше назначить слушателя на родителя

const button3El = document.querySelector('.button3');

// button3El.addEventListener('click', function (event) {
//     console.log(event);
// });

// можно обратиться к каждому элементу, пробежавшись по NodesList
const button3Els = document.querySelectorAll('.button3');

button3Els.forEach(element => {
    element.addEventListener('click', function (event) {
        console.log(event.target);
    });
});

// на примере списка

const menuEl = document.querySelector('.menu');


const nameFunction = (e) => {
    console.log(e.target, e.currentTarget);
};

menuEl.addEventListener('click', nameFunction);

// Проверка загрузки сайта
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('loaded');
});

window.addEventListener('load', function (e) {
    console.log('все загрузилось');
});

//событие по мыши, при наведении mouseover

button3El.addEventListener('mouseover', function (e) {
    console.log('Не нужно наводить, ты лучше нажми');
});

button3El.addEventListener('mouseleave', function (e) {
    console.log('Не нужно уходить');
});

// отлов нажатой клавиши keydown, keyup, keypress
window.addEventListener('keydown', function (e) {
    console.log(e.key);
});

// Остановка перехода по ссылке и вывод сообщения
const linkEl = document.querySelector('.link');

linkEl.addEventListener('click', function (e) {
    e.preventDefault(); // останавливаем событие (в данном случае - переход по ссылке)
    console.log('hello link');
});

// отлов скопированного текста
document.addEventListener('copy', function (e) {
    const copyText = document.getSelection().toString(); // получить выбранное в строку
    console.log(copyText);
});

// отлов количества изменения размера окна
window.addEventListener('resize', (e) => {
    console.log('resize');
});

// поле ввода
const inputEl = document.querySelector('input');

// document.querySelector('input').addEventListener('input', (e) => {
inputEl.addEventListener('input', (e) => {
    if (e.target.value == 123) {
        console.log('верно');
    } else {
        console.log('не верно');
    }
});

//отправка submit

const inputText = document.querySelector('input');
const formRun = document.querySelector('form');
const errorEl = document.querySelector('.error');

formRun.addEventListener('submit', (e) => {
    if (inputText.value === '') { // если ничего не введено ...
        e.preventDefault(); // ... останавливаем отправку ...
        errorEl.textContent = 'Поле не должно быть пустым' // ... и выводим сообщение
    }
});