/*домашнее задание №2*/
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
console.log('Задание 1.');
const dropdownItemEl = document.querySelectorAll('.dropdown-item');

dropdownItemEl.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
console.log('Задание 2.');
const btnEl = document.querySelector('.btn');

function toBeOrNotToBe() {
    if (btnEl.classList.contains('btn-secondary')) {
        btnEl.classList.remove('btn-secondary');
    } else {
        btnEl.classList.add('btn-secondary');
    }
};

toBeOrNotToBe();

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
console.log('Задание 3.');
const menuEl = document.querySelector('.menu');

menuEl.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`
console.log('Задание 4.');
const dropdownEl = document.querySelector('div.dropdown');

dropdownEl.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
console.log('Задание 5.');
const dropdownMenuButtonEl = document.querySelector('#dropdownMenuButton');

dropdownMenuButtonEl.id ='superDropdown';
console.log(dropdownMenuButtonEl);
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
console.log('Задание 6.');
const arialabelledbyEl = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
console.log(arialabelledbyEl);
arialabelledbyEl.setAttribute('data-dd','3');
console.log(arialabelledbyEl);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
console.log('Задание 7.');
const dropdownToggleEl = document.querySelector('.dropdown-toggle');
dropdownToggleEl.removeAttribute('type');
console.log(dropdownToggleEl);