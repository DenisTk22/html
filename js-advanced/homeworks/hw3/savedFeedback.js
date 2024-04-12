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
        const feedbacks = [];
        JSON.parse(localStorage.getItem(key)).forEach(feedback => {
            feedbacks.push(feedback);
        });

        const productEl = document.createElement('li');
        productEl.id = key;
        feedbackListEl.append(productEl);
        productEl.textContent = key;

        const showFeedbackEl = document.createElement('button');
        showFeedbackEl.classList.add('show');
        showFeedbackEl.textContent = "Показать отзывы";
        productEl.append(showFeedbackEl);

        feedbacks.forEach(feedback => {
            console.log(feedback);
            const feedbackTextEl = document.createElement('p');
            feedbackTextEl.classList.add('feedback');
            productEl.append(feedbackTextEl);
            feedbackTextEl.textContent = feedback;
            feedbackTextEl.style.display = 'none';

            const deleteFeedbackEl = document.createElement('button');
            deleteFeedbackEl.classList.add('remove');
            deleteFeedbackEl.textContent = "Удалить";
            feedbackTextEl.append(deleteFeedbackEl);
        });
    }
} else {
    feedbackListEl.textContent = "Отзывов на продукты нет.";
};


let count = 0;

feedbackListEl.addEventListener('click', (e) => {
    const parent = e.target.parentElement;

    if (e.target.classList.contains('show')) {
        count++;
        if (count % 2 !== 0) {
            e.target.textContent = "Скрыть отзывы";
            let temp = parent.getElementsByTagName('p');
            for (let i = 0; i < temp.length; i++) {
                const element = temp[i];
                element.style.display = 'block';
            }
        } else {
            e.target.textContent = "Показать отзывы";
            let temp = parent.getElementsByTagName('p');
            for (let i = 0; i < temp.length; i++) {
                const element = temp[i];
                element.style.display = 'none';
            }
        }
    }

    if (e.target.classList.contains('remove')) {
        const elId = e.target.parentElement.parentElement.id; // id продукта - совпадает с ключом в localStorage
        const product = e.target.parentElement.parentElement; // родительский элемент отзыва (продукт)

        product.removeChild(e.target.parentElement); // удаление отзыва со страницы

        if (product.getElementsByTagName('p').length === 0) {
            product.style.display = 'none';
            localStorage.removeItem(elId);
        }
    }
});


