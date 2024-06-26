const mainEl = document.querySelector('.content');
const navEL = document.querySelector('.navigation__item');
// console.log(navEL);

const topEl = document.querySelector('.top');
const navigationEl = document.querySelector('.navigation');
// parentElement можно вызвать только у одного элемента, нельзя у ListNodes
console.log(navEL);
console.log(navEL.parentElement);
console.log(navEL.parentNode);

//стили для header
navigationEl.style.display = 'flex';
navigationEl.style.gap = '10px';
navigationEl.style.alignItems = 'center';



//замена тега <p> на тег <a>
const aTegEL = document.createElement('a');
aTegEL.textContent = navEL.textContent; // передаем содержимое текста от элемента navEL элементу aTegEL

navEL.parentNode.replaceChild(aTegEL, navEL); //меняем тег элемента navEl(<p>) на тег элемента aTegEL(<a>)

aTegEL.setAttribute('href', '#'); //Добавляем элементу aTegEL атрибут href='#'
const classNavEL = navEL.getAttribute('class'); // получаем значение класса элемента navEL в переменную classNavEL
// console.log(classNavEL);
aTegEL.setAttribute('class', classNavEL); // назначаем значение класса элемента navEL элементу aTegEL
// console.log(navEL);

// нахождение элемента по текстовому содержанию
const navEls = document.querySelectorAll('.navigation__item');
console.log(navEls);

let aboutEL;
navEls.forEach(element => {
    if (element.textContent === 'About') {
        aboutEL = element;
    }
});
console.log(aboutEL);

//Стили для заголовка
const headingEl = document.querySelector('.heading');

headingEl.style.color = 'green';
headingEl.style.textAlign = 'center';
headingEl.style.fontFamily = 'Arial, "Helvetica Neue", Helvetica, sans-serif';

//Кнопка
const btnEl = document.querySelector('.push_me');

/*при клике на кнопку удаляются стили*/
btnEl.onclick = () => {
    headingEl.style.color = 'black';
    headingEl.style.textAlign = 'left';
    headingEl.style.fontFamily = 'normal';
}

//Добавить кнопку
const buttonNewEl = document.createElement('button');
buttonNewEl.textContent = 'Tech_me';
mainEl.appendChild(buttonNewEl);
buttonNewEl.classList.add('tech_me'); // добавить класс, используя метод classList.add()
buttonNewEl.style.display = 'block';
buttonNewEl.style.marginTop = '10px';
buttonNewEl.style.marginBottom = '10px';

/*При клике на кнопку, после ссылки добавляется <p> с текстом "Кликните ссылку выше"
insertBefore(node, nextSibling);*/
const imgEl = document.querySelector('.img');
const pEl = document.createElement('p');
pEl.setAttribute('class', 'pusher'); // добавить класс, используя метод setAttribute()

buttonNewEl.onclick = () => {
    pEl.textContent = 'Кликните ссылку выше';
    imgEl.before(pEl); // вставить элемент pEl перед imgEl
}

/*Создать кнопку, при клике на которую, на страницу выводятся названия всех родительких тегов ul*/
const button3 = document.createElement('button');
const aEl = document.querySelector('.link');
const ulEl = document.querySelector('.content__list')

button3.textContent = 'See parents';
aEl.after(button3); // вставить элемент button3 после элемента aEl

button3.style.display = 'block';
button3.style.marginBottom = '10px';

let nextParent = ulEl.parentElement;

button3.onclick = () => {
    console.log('Все родители списка ul:');
    while (nextParent !== null) {
        console.log(nextParent);
        nextParent = nextParent.parentElement;
    }
}
/**задача 1 */
const j = 'ab';
const s = 'aabbcd';
let count = 0;

for (let i = 0; i < j.length; i++) {
    const e = j[i];
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        if (e === el) {
            count++;
        }
    }
}

console.log(count);

/**Задача 2 найтит самую длинную последовательность из 1*/
const arr = [5, 1, 1, 0, 1, 1, 1, 0];
let count1 = 0;
const oneLength = [];

arr.forEach((value, i) => {
    if (value === 1) {
        count1++;
    } else {
        oneLength.push(count1);
        count1 = 0;
    }
});

const max = Math.max.apply(null, oneLength)

console.log(max);

/**Задача 3 выбрать уникальные значения и выставить по возрастанию, желательно использовать лишь константный объем памяти в работе */
const arr2 = [5, 2, 4, 8, 8, 8]

const arr3 = [... new Set(arr2)];

const arr4 = arr3.sort((a, b) => a - b);

console.log(arr4)