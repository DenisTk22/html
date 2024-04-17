/**
 * Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

Для создания элементов интерфейса используйте HTML.
При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
 */

const sliderEl = document.querySelector('.slider');
const previousEl = sliderEl.querySelector('.slider__previous');
const nextEl = sliderEl.querySelector('.slider__next');
// const picturesEl = sliderEl.querySelector('.slider__pictures');
const dotsEl = sliderEl.querySelector('.slider__dots');
const imgEl = sliderEl.querySelectorAll('.slider__picture');
const sliderContentEl = document.querySelector('.slider__content');

imgEl.forEach((el, i) => { //${i+1}
let dot = '';
    dot += `
        <a href="#" id="${i}" class="dot"></a>
    `;
    dotsEl.insertAdjacentHTML('beforeend', dot);
});

sliderContentEl.addEventListener('click', ({target}) => {
    if (target.classList.contains('slider__next')) {
        let nextEl = '';
        let currentEL = '';
        imgEl.forEach((pic, i) => {
            if (!pic.classList.contains('hidden')) {
                currentEL = pic;
                nextEl = imgEl[i+1]
                if (!nextEl) {
                    nextEl = imgEl[0]
                }
            }
        });
            currentEL.classList.add('hidden');
            nextEl.classList.remove('hidden');

    } else if (target.classList.contains('slider__previous')) {
        let previousEl = '';
        let currentEL = '';
        imgEl.forEach((pic, i) => {
            if (!pic.classList.contains('hidden')) {
                currentEL = pic;
                previousEl = imgEl[i-1]
                if (!previousEl) {
                    previousEl = imgEl[imgEl.length-1]
                }
            }
        });
            currentEL.classList.add('hidden');
            previousEl.classList.remove('hidden');

    }       
});

dotsEl.addEventListener('click', ({target}) => {
    const dot = Number(target.id);
    let currentEL = '';
    imgEl.forEach((pic, i) => {
        pic.classList.add('hidden');
        if (i === dot) {
            currentEL = pic;
        }
    });
    currentEL.classList.remove('hidden');
})

