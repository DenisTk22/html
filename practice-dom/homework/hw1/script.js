// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
console.log('Задание 1.');
const superLinkId = document.getElementById('super_link');
console.log(superLinkId);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
console.log('Задание 2.');
console.log('<-- Смотри окно браузера');
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
console.log('Задание 3.');
const cardLinkinCardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardLinkinCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
console.log('Задание 4.');
const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.
console.log('Задание 5. Cодержимое тега title');
const titleContent = document.querySelector('title');
console.log(titleContent.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
console.log('Задание 6.');
const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentNode);

// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
console.log('Задание 7.');
console.log('<-- Смотри окно браузера');
const textEl = document.createElement('p');
const cardEl = document.querySelector('.card');
textEl.textContent = 'Привет';
cardEl.prepend(textEl);

// 8. Удалите тег h6 на странице.
console.log('Задание 8.');
console.log('теперь данного тега нет:');
const cardSubtitle = document.querySelector('h6');
console.log(cardSubtitle);
cardSubtitle.remove();