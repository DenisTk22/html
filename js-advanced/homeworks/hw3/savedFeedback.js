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
Если удалены все отзывы продукта, то продукт вовсе должен быть удален, как из localstorage, так и со страницы.
 */

const feedbackListEl = document.querySelector('.product__list');
feedbackListEl.style.listStyle = 'none';

if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
        
        const key = localStorage.key(i);
        const feedback = JSON.parse(localStorage.getItem(key));

        const productEl = document.createElement('li');
        productEl.id = key;
        feedbackListEl.append(productEl);
        productEl.textContent = key;

        const showFeedbackEl = document.createElement('button');
        showFeedbackEl.classList.add('show');
        showFeedbackEl.textContent = "Показать отзыв";
        productEl.append(showFeedbackEl);

        const feedbackTextEl = document.createElement('p');
        productEl.append(feedbackTextEl);
        feedbackTextEl.textContent = feedback;
        feedbackTextEl.style.display = 'none';

        const deleteFeedbackEl = document.createElement('button');
        deleteFeedbackEl.classList.add('remove');
        deleteFeedbackEl.textContent = "Удалить";
        feedbackTextEl.append(deleteFeedbackEl);
    }
} else {
    feedbackListEl.textContent = "Отзывов на продукты нет.";
};


let count = 0;

feedbackListEl.addEventListener('click', (e) => {
    const parent = e.target.parentElement;

    if (e.target.classList.contains('show')){
        count++;
        if (count % 2 !== 0) {
        parent.querySelector('p').style.display = 'block'
        e.target.textContent = "Скрыть отзыв";
    } else {
        e.target.textContent = "Показать отзыв";
        parent.querySelector('p').style.display = 'none'
    }
    }
    
    if (e.target.classList.contains('remove')) {
            const elId = e.target.parentElement.parentElement.id;

            e.target.parentElement.parentElement.style.display = 'none';
            localStorage.removeItem(elId);
        }
});


