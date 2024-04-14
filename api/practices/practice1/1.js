/**
 * Задание 1.
1. Необходимо выводить на страницу текущую ширину и высоту окна браузера, при изменении значений, вывод также должен меняться.
2. При закрытии страницы (вкладки), необходимо выводить всплывающее окно или диалоговое окно браузера и спросить, уверен ли пользователь, что хочет покинуть страницу?
3. Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.
 */

console.log(window.innerWidth, window.innerHeight); // размер окна
console.log(document.documentElement.clientHeight, document.documentElement.clientWidth); // ширина видимой области экрана без прокрутки
console.log(screen.availHeight, screen.availWidth); // область которую браузер может занять на экране

const sizeEl = document.querySelector('.size');

printSize = () => {
    sizeEl.textContent = `${window.innerWidth} x ${window.innerHeight}`;
}

printSize();

window.addEventListener('resize', function() {
    printSize();
});

window.addEventListener('beforeunload', function (e) {
    if (!confirm('Вы хотите покинуть страницу?')) {
        e.preventDefault();
    } else {
        e.returnValue = '';
    }
});

window.history.back();
window.history.forward();