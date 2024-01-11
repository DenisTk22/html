const blockEl = document.querySelector('p');
// const blockEl1 = document.querySelector('#block p:firstChild'); // уточнить


console.log(blockEl);

const wwwwEl = document.querySelector('.www');

console.log(wwwwEl);

//2
/*Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 
Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета */

const aTextNew = document.querySelector('.link');


aTextNew.textContent = 'link text js';

aTextNew.href = 'https://developer.mozilla.org/ru/'

const newLink = document.querySelector('.photo');

// newLink.src = 'https://nevi.ru/wp-content/uploads/2018/12/novye-fotografii.jpg';

//3
/*Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел */
const divContent = document.querySelector('.content');

const newP = document.createElement('p');
newP.textContent = 'Новый текстовый элемент';

// const newHeading = document.createElement('h1');
// newHeading.textContent = 'Новый заголовок';



// divContent.appendChild(newHeading);
divContent.appendChild(newP);

// divContent.appendChild(document.createElement('img'));
// divContent.appendChild(document.createElement('div'));

// document.createElement('div').


const removeP = document.querySelector('.content p');
// console.log(removeP);

newP.remove();

/*Создать элемент button, добавить в блок <div class="content"></div>
При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку */
/*<div class="content">
        <h1>Счетчик кликов</h1>
        <p>Вы нажали на кнопку 0 раз</p>
        <button>+1</button>
    </div>
Создать вот такую структуру, чтобы при нажатии на кнопку, 0 менялся на количество нажатий */

const btn = document.createElement('button');
const headingH1 = document.createElement('h1');
const paragraph = document.createElement('p');

btn.textContent = 'Нажми на кнопку';
headingH1.textContent = 'Счетчик кликов';
paragraph.textContent = 'Вы нажали на кнопку';

divContent.appendChild(btn);
let count = 0;
console.log(paragraph);
btn.onclick = function() {
    // count ++;
    console.log(++count);
}

/*Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен” */

const btnNew = document.createElement('button');

btnNew.textContent = 'Отправить';
divContent.append(btnNew);

btnNew.onclick = function () {
    btnNew.textContent = 'Текст отправлен';
}