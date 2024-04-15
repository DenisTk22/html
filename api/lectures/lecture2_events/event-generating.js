/**
Генерация событий пользователя
Через конструктор класса Event мы можем создать событие.
Для запуска события у элемента есть метод dispatchEvent.
Свойство isTrusted нам вернёт ответ, является ли событие встроенным.
Свойство preventDefault отменит действия браузера по умолчанию.

<button id="btn">Click</button>
 */
//Создание события
const clickEvent = new Event('click');

//Добавляем обработчик события на элемент
const button = document.getElementById('btn');
button.addEventListener('click', (event) => {
    console.log('Нажали на кнопку');
});

//Имитируем клик на кнопке
button.dispatchEvent(clickEvent);

///<button id="btn">Нажми мены</button>
const button2 = document.getElementById('btn');
button2.addEventListener('click', (event) => {
    if (event.isTrusted) { // действительно ли нажали на кнопку
        console.log('Нажали на кнопку');
    } else {
        console.log('Имитируем клик');
    }
});

function simulateClick() {
    const clickEvent = new Event('click', {bubbles: true});
    button2.dispatchEvent(clickEvent);
}

setTimeout(simulateClick, 2000); //Имитируем клик через 2 секунды

