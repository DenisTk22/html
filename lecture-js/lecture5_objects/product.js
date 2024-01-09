
const product = {
    name: 'Стол',
    price: 2000,
    count: 0,
    userRegistrted: false,
    registration: function () {
        this.userRegistrted = true;
        console.log("Вы зарегистрированы!");
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log('Вы можете купить данный товар');
            // count = this.count - 1;
        } else {
            console.log('Данный товар нельзя купить');
        }
    },
    buyProduct: function () {
        if (this.userRegistrted) {
            console.log('Товар в корзине');
        } else {
            console.log('Вам необходимо зарегистрироваться! Выполните product.registration()');
        }
    }

}

product.buyProduct();
product.registration();
product.buyProduct();
// product.buyProduct();
// product.count = product.count - 1;
// console.log('Осталось ' + product.count);
// product.buy();
// product.count = product.count - 1;
// console.log('Осталось ' + product.count);
// product.buy();

const productTest = { text: 'hello', price: 1000 };

for (const key in productTest) {
    console.log(key); // введеи название ключей
    console.log(productTest[key]); // выведет значения ключей
}

//Преобразование объекта в массив:

console.log(Object.keys(productTest)); // вернет массив с ключами
console.log(Object.values(productTest)); // вернет массив со значениями
console.log(Object.entries(productTest)); // вернет массив с элементами