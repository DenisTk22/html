const mainEl = document.querySelector('.content');
const navEL = document.querySelector('.navigation__item');
const topEl = document.querySelector('.top');
const navigationEl = document.querySelector('.navigation');
// parentElement можно вызвать только у одного элемента, нельзя у ListNodes
console.log(navEL);
console.log(navEL.parentElement);
console.log(navEL.parentNode);

//стили для header
navigationEl.style.display = 'flex';
navigationEl.style.gap = '10px';

//замена тега <p> на тег <a>
const aTegEL = document.createElement('a');
aTegEL.textContent = navEL.textContent;
// aTegEL.classList(navEL);

navEL.parentNode.replaceChild(aTegEL, navEL);


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

//Добавить кнопк
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