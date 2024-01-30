//// прерывание распространения события.
// Event.stopPropagation() метод остановит дальнейшее распространение события вверх по DOM-дереву в текущей и последующих фазах

//Event.stopImmediatePropagation()

//// Действия по умолчанию и отменяемые события (index2.html)
// Event.preventDefault() метод останавливает событие.
// Отменяемые объекты события часто связаны с одним или несколькими действиями по умолчанию. Чтобы отменить действия по умолчанию, надо вызвать метод preventDefault() на объекте события.
// Например, событие mousedown отправляется сразу после того, как пользователь нажимает вниз кнопки на указательном устройстве (обычно мышь)
// Действие по умолчанию, связанное с событием click для элементов <input type="checkbox">, переключает значение атрибута checked этого элемента. Если действие click по умолчанию для события отменяется, значение возвращается в прежнее состояние.
// const checkbox = document.querySelector('input [type=checkbox]')

// checkbox.addEventListener('click', (event) => {
//     console.log(event.target.checked)  // true
//     event.preventDefault();
///    return false;
// });

const inputEl = document.querySelector('.check');
const formEl = document.querySelector('.form');
const errorEl = formEl.querySelector('.error');

inputEl.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target);
    console.log(target.value);
    console.log(target.checked);
});

formEl.addEventListener('submit', (e) => {

    console.log(inputEl.checked ? 'Молодец' : 'Забыл поставить галку'); // упрощенная конструкция

    if (inputEl.checked) { // если элемент выбран
        console.log('Молодец')
    } else {
        errorEl.textContent = 'Выбрать "Согласен с условиями"';
        console.log('Забыл поставить галку');
        e.preventDefault(); // если не поставил галочку, то остановить событие
    }
});

/// Генерация событий, пользовательские события

const eventOptions = {bubbles: true, cancelable: true}; // опции события: всплытие, отменяемость
const ev = new Event('click', eventOptions);
ev.view = window;

const mouseEvent = new MouseEvent('click', {
    ...eventOptions,
    view: window, // интересует все окно
});

document.addEventListener('click', (ev) => {
    console.log(ev.isTrusted)
});

const button = document.querySelector('.button2');
button.dispatchEvent(ev);
button.dispatchEvent(mouseEvent);
button.click();
// Встроенные события также генерируются методами HTMLElement.click(), HTMLElement.focus()
// Чтобы сгенерировать событие всплывало или было отменено, надо передать в опции поля bubbles и cancelable.
// Оличить сгенерированное событие от собственного можно по полю isTrusted в обработчике события.
// Важно! Обработчики сгенерированных событий выполняются синхронно