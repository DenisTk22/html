/**
 * LocalStorage и SessionStorage
LocalStorage и SessionStorage представляют собой хранилище браузера, в которое мы по своему усмотрению можем записать и считать данные из любого места скрипта.
В отличие от cookie, они никак не зависят от наличия сервера и хранить можно гораздо больше данных.
Данные LocalStorage не удаляются при закрытии браузера и хранятся там, пока какое-то событие их не изменит или не очистит.
При обновлении страницы данные сохранятся, но при закрытии браузера или вкладки удаляются. С этим и связано весьма ограниченное использование SessionStorage.
 */

//LocalStorage и SessionStorage
//Методы у LocalStorage и SessionStorage одинаковы:
// setItem(ключ, значение) – сохранить элемент с ключом «ключ» и данными «значение»
// getItem(ключ) – получить значение по ключу
// removeItem(ключ) – удалить пару «ключ» и «значение» по заданному ключу
// key(номер позиции) – получить ключ на заданной позиции
// length – количество элементов в хранилище
// clear() – очистка хранилища

//Установка и получение данных из LocalStorage
// Установка значения в LocalStorage
localStorage.setItem('username', 'Denis');

//Получение значения из LocalStorage
let storedUsername = localStorage.getItem('username');
console.log('Значение из LocalStorage', storedUsername);

//Удаление значения из LocalStorage
localStorage.removeItem('name');
localStorage.removeItem('username');

//Проверка, что значение удалено
let storedUsername2 = localStorage.getItem('username');
console.log('Значение из LocalStorage', storedUsername2);

//Очистка LocalStorage
localStorage.clear();

//Проверка что LocalStorage пустой
console.log('LocalStorage', localStorage); //или
console.log(localStorage.length);

///Проверяем, есть ли значение счетчика в LocalStorage
if (localStorage.getItem('counter')) {
    //Если значение счетчика уже есть, то увеличиваем его на 1
    let counter = parseInt(localStorage.getItem('counter')) + 1;
    localStorage.setItem('counter', counter.toString());
} else {
    //Если значения счетчика нет, то записываем в него 1
    localStorage.setItem('counter', '1');
}

//Выводим значение счетчика в консоль
console.log('Значение счетчика', localStorage.getItem('counter'));

//Проверяем есть ли значение в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

//Обновляем значение счетчика и сохраняем в LocalStorage
const updateCounter = () => {
    counter++;
    localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

//Обработка события нажатия на кнопку "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});
