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
    if (localStorage.getItem(product) !== null) {
        localStorage.setItem(product, JSON.stringify(product.push(feedback)));
    } else {
        const product = [];
        // product.push(feedback);
        localStorage.setItem(product, JSON.stringify(product.push(feedback)))
    }
})

//(localStorage.getItem('myKey') || '') + 'new value'