// JSON объект
json =
{
    'first_name': 'Sammy',
    "last_name": 'Shark',
    'location': 'Ocean',
    'online': true,
    'followers': 987
};

const productData = [
{
    name: 'Название товара obj',
    price: 80,
},
{
    name: 'Название товара obj2',
    price: 50,
},
]

const productNameLink = document.querySelector('.product__name');
const productsPriceLink = document.querySelector('.product__price');

productNameLink.textContent = productData.name;
productsPriceLink.textContent = productData.price;

// Преобразование объекта в строку

const obj = {'first_name' : 'John', 'last_name' : 'Smith', 'location' : 'London'};

const s = JSON.stringify(obj);

console.log(obj);

console.log(s);