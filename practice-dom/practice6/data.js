/*Дан макет https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 в котором представлены товары на странице корзины
Необходимо создать файл data.js в котором создать переменную dataProducts в которую присвоить JSON данные по товарам.
Вам нужно самостоятельно создать JSON данные (не забыть про кавычки
Добавить все данные из макета, чтобы в дальнейшем по ним мы смогли создать вёрстку */

const dataProducts = `[
    {
        "id": "1",
        "title": "MANGO PEOPLE",
        "subtitle": "T-SHIRT",
        "price": "$300",
        "color": "Red",
        "size": "XL",
        "quantity": "2",
        "photo": "./pictures/pic_id1.svg"
    },
    {
        "id": "2",
        "title": "ELLERY X M'O",
        "subtitle": "CAPSULE",
        "price": "$52",
        "color": "Black",
        "size": "XL",
        "quantity": "1",
        "photo": "./pictures/pic_id2.svg"
    }
]`

const data = JSON.parse(dataProducts);

/*Создаём блоки с помощью javascript для этого используем данные из dataProducts
Формируем товары на основе нашей вёрстки
Проверяем, как будет выглядеть сайт, если в json данных, добавить еще один объект с товаром (в вёрстке должен появиться еще один блок, на основе этих данных) */



data.forEach(dataProduct => {

const contentEl = document.querySelector('.content');
// console.log(contentEl);

const cardEl = document.createElement('div');
cardEl.classList.add('card');

const pictureEl = document.createElement('div');
pictureEl.classList.add('picture');

const imgEl = document.createElement('img');
imgEl.classList.add('img');
imgEl.setAttribute('alt', 'id1');
imgEl.src = dataProduct.photo;

const contentCardEl = document.createElement('div');
contentCardEl.classList.add('content__card');

const headEl = document.createElement('div');
headEl.classList.add('head');

const titleEl = document.createElement('a');
titleEl.setAttribute('href', '#');
titleEl.classList.add('title');
titleEl.textContent = dataProduct.title;

const subtitleEl = document.createElement('div');
subtitleEl.classList.add('subtitle');
subtitleEl.textContent = dataProduct.subtitle;

const dataEl = document.createElement('div');
dataEl.classList.add('data');

const priceEl = document.createElement('p');
priceEl.classList.add('price');
priceEl.textContent = 'Price:';

const priceTextEl = document.createElement('span');
priceTextEl.classList.add('price__text');
priceTextEl.textContent = dataProduct.price;

const colorEl = document.createElement('p');
colorEl.classList.add('color');
colorEl.textContent = 'Color:' + dataProduct.color;

const sizeEl = document.createElement('p');
sizeEl.classList.add('size');
sizeEl.textContent = 'Size:' + dataProduct.size;

const quantityEl = document.createElement('p');
quantityEl.classList.add('quantity');
quantityEl.textContent = 'Quantity';

const quantityTextEl = document.createElement('input');
quantityTextEl.setAttribute('type', 'number');
quantityTextEl.setAttribute('value', '2');
quantityTextEl.setAttribute('min', '1');
quantityTextEl.classList.add('quantity__text');
// quantityTextEl.textContent = '';

const closeEl = document.createElement('a');
closeEl.setAttribute('href', '#');
closeEl.classList.add('close');
closeEl.textContent = 'X';

contentEl.appendChild(cardEl);

cardEl.appendChild(pictureEl);
cardEl.appendChild(contentCardEl);
cardEl.appendChild(closeEl);

pictureEl.appendChild(imgEl);

contentCardEl.appendChild(headEl);
contentCardEl.appendChild(dataEl);

headEl.appendChild(titleEl);
headEl.appendChild(subtitleEl);

dataEl.appendChild(priceEl);
dataEl.appendChild(colorEl);
dataEl.appendChild(sizeEl);
dataEl.appendChild(quantityEl);

priceEl.appendChild(priceTextEl);

quantityEl.appendChild(quantityTextEl);

});
