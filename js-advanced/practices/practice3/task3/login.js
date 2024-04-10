import { loginUser } from "./storage.js";

const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const loginBtnEl = document.querySelector('.loginBtn');

// const lsUsersKey = 'users'; // массив пользователей

loginBtnEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;
    try {
        loginUser(login, password);
        location.href = 'hello.html'; // перенаправляем на страницу логина
    } catch (error) {
        alert(error.message);
        return; // останавливаем работу функции, если ошибка возникла
    }
    // localStorage.setItem('login', login); // сохраняем логин и пароль в хранилище для дальнейшего использования в других страницах
    // localStorage.setItem('password', password);

    // if (localStorage.getItem(lsUsersKey)) { // lsUsersKey уже есть
    //     const users = JSON.parse(localStorage.getItem(lsUsersKey));
    //     if (users.some(user => user.login === login)) { 
    //         alert('Такой пользователь уже есть');
    //         return;
    //     }
    //     users.push({ login, password });
    //     localStorage.setItem(lsUsersKey, JSON.stringify(users));
    // } else {
    //     const users = [{ login, password }];
    //     localStorage.setItem(lsUsersKey, JSON.stringify(users));
    // }
});