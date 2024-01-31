/*В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить
При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями” */

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.check');
const errorEl = document.querySelector('.error');
const buttonEl = document.querySelector('.button');

formEl.addEventListener('submit', (e) => {

    if (inputEl.checked) {
        console.log('Выбрано');
        buttonEl.disabled = false;
    } else {
        errorEl.textContent = 'Необходимо согласиться с условиями.';
        e.preventDefault()
    }
});

/*В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести сообщение “Кофе закончился” */

const form2El = document.querySelector('.form2');
const teaChoiseEl = form2El.querySelector('.tea');
const coffeeChoiseEl = form2El.querySelector('.coffee');
const button2El = document.querySelector('.button2');

button2El.addEventListener('click', (e) => {
    e.preventDefault();
    if (teaChoiseEl.checked) {
        console.log('Чай закончился');
    } else if(coffeeChoiseEl.checked) {
        console.log('Кофе закончился');
    }
});

/*Создать поле ввода (пароль)
Кнопка отправить
Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный” */

const form3El = document.querySelector('.form3');
const passwordEl = document.querySelector('.password');
const button3El = document.querySelector('.button3');
const error3El = document.querySelector('.error3');
const pasEL = document.querySelector('.pas')

const password = 'пароль';

form3El.addEventListener('submit', e => {
    e.preventDefault(); // работает со submit, не с click
    if (passwordEl.value === password) {
        passwordEl.style.backgroundColor = 'green';
        pasEL.textContent = passwordEl.value;
    } else if (passwordEl.value === '') {
        error3El.textContent = 'введите пароль!';
        passwordEl.style.borderColor = 'red';
       
    } else if (passwordEl.value !== password){
        error3El.textContent = 'пароль неверный';
        passwordEl.style.borderColor = 'red';
       
    } 
});

/*Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода */

const form4El = document.querySelector('.form4El');
const input4El = document.querySelector('.input4');
const titleEL = document.querySelector('.title4');

input4El.addEventListener('input', (e) => {
    titleEL.textContent = e.target.value;
});