// JSON объект
json =
{
    'first_name': 'Sammy',
    "last_name": 'Shark',
    'location': 'Ocean',
    'online': true,
    'followers': 987
};

const productData0 = [
    {
        name: 'Название товара obj',
        price: 80,
    },
    {
        name: 'Название товара obj2',
        price: 50,
    },
]

// const productNameLink = document.querySelector('.product__name');
// const productsPriceLink = document.querySelector('.product__price');

// productNameLink.textContent = productData.name;
// productsPriceLink.textContent = productData.price;

// Преобразование объекта в строку

const obj = { 'first_name': 'John', 'last_name': 'Smith', 'location': 'London' };

const s = JSON.stringify(obj);

// console.log(obj);

// console.log(s);

// Преобразование строки в объект. Чтобы преобразовать текст в объект используйте функцию  eval()

const data = JSON.parse(s);

//Шаблонизация
// const productData = {
//     scr: 'img.png',
//     alt: 'img obj data',
//     name: 'Название из obj data',
//     link: 'product.html',
//     desc: 'Опимание товара из obj data',
//     price: 21000,
// }

const productsData = [ // эти данные приходят из backend
    {
        scr: 'img.png',
        alt: 'img obj data',
        name: 'Название из obj data',
        link: 'product.html',
        desc: 'Опимание товара из obj data',
        price: 21000,
    },
    {
        scr: 'img2.png',
        alt: 'img obj data new photo',
        name: 'Название нового товара из obj data',
        link: 'product2.html',
        desc: 'Опимание нового товара из obj data',
        price: 11000,
    },
    {
        scr: 'img3.png',
        alt: 'img obj data new photo3',
        name: 'Название нового товара из obj data 3',
        link: 'product3.html',
        desc: 'Опимание нового товара из obj data 3',
        price: 31000,
    },
]

productsData.forEach(productData => {
    const productBox = document.querySelector('.product-box');

    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.setAttribute('alt', productData.alt);
    productImg.src = productData.src;

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productLink = document.createElement('a');
    productLink.href = productData.link;
    productLink.textContent = productData.name;

    const productText = document.createElement('p');
    productText.classList.add('product__text');
    productText.textContent = productData.desc;

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = productData.price;

    productContent.appendChild(productLink);
    productContent.appendChild(productText);
    productContent.appendChild(productPrice);
    productEl.appendChild(productImg);
    productEl.appendChild(productContent);
    productBox.appendChild(productEl);
});