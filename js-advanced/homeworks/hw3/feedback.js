/**
 * Создайте две html-страницы:

1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не так, необходимо выводить ошибку пользователю.

2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" (надпись кнопки меняется), при нажатии на которую показываются / скрываются отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв из localstorage и со страницы.
Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из localstorage, так и со страницы.
 */

const prodNameEl = document.querySelector('.product__name');
const prodFeedbackEl = document.querySelector('.product__feedback');
const saveFeedbackEl = document.querySelector('.product__saveFeedback');

const feedbackdb = {};
const feedbackArr = [];

localStorage.clear();

// сохранение данных
saveFeedbackEl.addEventListener('click', () => {
    const product = prodNameEl.value;
    const feedback = prodFeedbackEl.value;
    // const arrEx = [];

    // localStorage.setItem(product, JSON.stringify(feedback));

    if (localStorage.getItem(product) === null) {
            const arr = [];
            console.log(feedback);
            arr.push(feedback);
            localStorage.setItem(product, JSON.stringify(arr));
    } else {
        const arrEx = [];
        // let arrEx1 = [];
        // arrEx.push(localStorage.getItem(product));
        // arrEx1 = arrEx.push(JSON.parse(localStorage.getItem(product)));
        arrEx.push(JSON.parse(localStorage.getItem(product)));
        console.log(arrEx);
        // console.log(arrEx.push(JSON.parse(localStorage.getItem(product))));
        // product.push(feedback);
        arrEx.push(feedback);
        localStorage.setItem(product, JSON.stringify(arrEx));
    }
});

/**
 * (function{
    var array = localStorage.getItem('id') || [];
    obj = {};
    obj.id = 1;
    array.push(obj);

    localStorage.setItem('id', JSON.stringify(array));
}();
 */