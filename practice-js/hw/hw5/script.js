// Задание 1. Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.
console.log('Задание 1.');
const numbers = {keyin1: 1,keyin2: 2,keyin3: 3,keyin4: 4,keyin5: 5,keyin6: 6,keyin7: 7,};
Object.values(numbers).map(function(value) {
    if (value >=3) {
        console.log(value);
    }
});
//Задание 2. Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
console.log('Задание 2.');
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
Object.values(post).map(function (value) {
    if (value === 'John') {
        console.log(value);
    }
});
Object.values(post.comments).map(function (value) {
    Object.values(value).map(function (value) {
        if (value === 5 || value === 'lorem ipsum 2') {
            console.log(value);
        }
        Object.values(value).map(function (value) {
        if (value === 2) {
            console.log(value);
        }
        });
    })   
});
// Задание 3. Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.
console.log('Задание 3.');
const products3 = [
    {id: 3,price: 200,},
    {id: 4,price: 900,},
    {id: 1,price: 1000,},
];
products3.forEach(element => {
    console.log(element.price * 0.85);
});
//Задание 4 // 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
console.log('Задание 4/1.');
const products = [
    {id: 3,price: 127,photos: ["1.jpg","2.jpg",],},
    {id: 5,price: 499,photos: [],},
    {id: 10,price: 26,photos: ["3.jpg",],},
    {id: 8,price: 78,},
];
const productsWithPhoto = products.filter 
((product) => {
    if (product.photos && product.photos.length != 0) 
    return product
});
console.log(productsWithPhoto);
console.log('Задание 4/2.');
console.log(products.sort((a, b) => a.price - b.price));
//**Задание 5** Дано 2 массива
//Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
console.log('Задание 5.');
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const enRu = {};
for (let i = 0; i < en.length; i++) {
    enRu[en[i]] = ru[i];
};
console.log(enRu);