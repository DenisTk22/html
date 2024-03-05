/// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj.Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

getPrototypeChain([1, 2, 3, 4]);

// obj.__proto__
// Object.getPrototypeOf(obj) // получение прототипа у объекта obj
// Object.prototype // свойство prototype у функции-конструктор Object
// const obj = new Object();

function getPrototypeChain(obj) {
    const arr = [obj];
    let proto = Object.getPrototypeOf(obj);
    while (proto) { //(proto !== null)
        arr.push(proto);
        proto = Object.getPrototypeOf(proto);
    }
    return arr;
}

console.log(getPrototypeChain([1, 2, 3, 4]));

/// Напишите конструктор объекта Person, который принимает два аргумента: name(строка) и age(число). Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // "Меня зовут John и мне 25 лет."

function Person(name, age) { // функция конструктор, название пишится с большой буквы
    this.name = name;
    this.age = age;
}

//методы функции конструктора лежат вне конструктора в прототипе

Person.prototype.introduce = function () {
    console.log(`Меня зовут ${this.name} и мне ${this.age}`);
}

const person1 = new Person("John", 25);
person1.introduce(); // "Меня зовут John и мне 25 лет."

///Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber(номер счета) и balance
//     (баланс), а также методы deposit(amount) для пополнения счета,
//         withdraw(amount) для снятия денег со счета и метод printBalance,
//             который отобразит в консоль текущий баланс счета.Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое 
// содержит название банка.

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// account1.printBalance(); // GBank account "1234567890" balance: 1300

class BankAccount {

    static bankName = "GBank"; // создается для самого класса, а не для объекта

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {

        if (amount <= 0 || !Number.isFinite(amount)) {
            throw new Error("Wrong deposit amount, must be a positive number");
        }

        // if (amount === Infinity) {
        //     throw new Error("Wrong deposit amount, must be a positive number");
        // }
        const splitedNumber = amount.toString().split(".");
        if (splitedNumber[1] && splitedNumber.length > 2) {
            throw new Error("Не верное значение!");
        }

        this.balance += amount;
    }

    withdraw(amount) {

        if (amount <= 0 || !Number.isFinite(amount)) {
            throw new Error("Wrong deposit amount, must be a positive number");
        }

        if (this.balance < amount) {
            throw new Error(`Insufficient funds in account "${this.accountNumber}"`);
        }

        const splitedNumber = amount.toString().split(".");
        if (splitedNumber[1] && splitedNumber.length > 2) {
            throw new Error("Не верное значение!");
        }

        this.balance -= amount;
    }

    printBalance() {
        console.log(`${BankAccount.bankName} account ${this.accountNumber} balance: ${this.balance}`);
    }

}

const account1 = new BankAccount("1234567890", 1000);
// console.log(account1);
// console.dir(BankAccount);
// account1.deposit(500);
// account1.withdraw(200);
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.

// try {
//     account1.deposit(-500);

// } catch (error) {
//     alert(`Ошибка ${error.message}`)
// }

// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
// console.log(account1);
// account1.printBalance(); // GBank account "1234567890" balance: 1300
// account1.deposit(200.256);
// console.log(account1);

///Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name(строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
 
// //Создайте класс Dog, который наследуется от класса Animal.Для класса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed(строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
 
// Пример использования:
// const animal1 = new Animal("Животное");
// animal1.speak(); // "Животное издает звук."
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // "Бобик издает звук."
// console.log(dog1.breed); // "Дворняжка"
// dog1.fetch(); // "Бобик принес мяч."

class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }

}

class Dog extends Animal { // при extends принимаются только методы

    constructor(name, breed) {
        super(name); // вызывается конструктор базового класса
        this.breed = breed;
    }

    fetch() {
        console.log(`${this.name} принеси мяч`);
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // "Животное издает звук."
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // "Бобик издает звук."
console.log(dog1.breed); // "Дворняжка"
dog1.fetch(); // "Бобик принес мяч."

console.log(dog1);


function printName() {
    console.log(this.name);
}
printName.call(animal1);
printName.call(dog1);

function printName(a,b) {
    console.log(this.name, a, b);
}
printName.call(dog1, 5, 10);
printName.apply(dog1, [5, 10]);

// https://learn.javascript.ru/error-handling
// https://learn.javascript.ru/async
// https://learn.javascript.ru/network