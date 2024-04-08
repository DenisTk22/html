///Cookie – это строки с данными, которые хранятся в браузере.
// Куки устанавливаются веб - сервером.
// Устанавливаются с помощью HTTP - заголовка
// Set - Cookie, затем браузер их будет вставлять во все запросы с помощью
// заголовка Cookie.
// Куки имеют максимальный объём данных 4Кб для одной пары ключ - значение, поэтому много информации записать в них не получится.

// Напишите функцию setCookie(name, value, days), которая позволяет установить Cookie c указанным именем, значением и сроком действия в днях

let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + '; expires' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue; // для создания cookie необходим document.cookie
};

setCookie('name', 'Denis', 1);
setCookie('age', '22', 1);

//Напишите функцию getCookie(name), которая позволяет получить значение Cookie с указанным именем.
let getCookie = (name) => {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie('username');
console.log('Значение cookie "username":', username);

//Напишите функцию deleteCookie(name), которая позволяет удалить Cookie с указанным именем.
// Для удаления cookie необходим document.cookie.

let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
};

deleteCookie('username');