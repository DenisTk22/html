const whatCanIDoNowArr = ['Включить любимую музыкальную группу', 'Посмотреть на небо', 'Встать и пройтись', 'Позвонить другу', 'Позвонить маме', 'Поиграть в игру', 'Вспомнить крутой момент из своей жизни', 'Лечь спать', 'Погладить котика', 'Потянуться', 'Сделать добро', 'Глубоко вдохнуть и расслабиться'];

const todoEL = document.querySelector('.todo');

const whatCanIDoNowEl = document.querySelector('.todo_button');

const whatCanIDoNow = () => {
    return whatCanIDoNowArr[Math.floor(Math.random() * whatCanIDoNowArr.length)];
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('todo_button')) {
        todoEL.textContent = whatCanIDoNow();
    }
});