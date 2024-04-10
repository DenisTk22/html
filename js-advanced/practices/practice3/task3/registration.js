import { getUsers, registerUser } from './storage.js';

const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const registrationEl = document.querySelector('.registration');

// const lsUsersKey = 'users'; // массив пользователей

registrationEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;
    const users = getUsers();
    // localStorage.setItem('login', login); // сохраняем логин и пароль в хранилище для дальнейшего использования в других страницах
    // localStorage.setItem('password', password);

    // if (users) { // localStorage.getItem(lsUsersKey) lsUsersKey уже есть
    //     const parsedUsers = JSON.parse(localStorage.getItem(lsUsersKey));
    if (users.some(user => user.login === login)) {
        alert('Такой пользователь уже есть');
        return;
    }
    registerUser(login, password);
    // users.push({ login, password });
    // localStorage.setItem(lsUsersKey, JSON.stringify(users));
    
    // } else {
    //     const users = [{ login, password }];
    //     localStorage.setItem(lsUsersKey, JSON.stringify(users));
    // }
    location.href = 'login.html'; // перенаправляем на страницу логина
});