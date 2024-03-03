//Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const person = {
    name: 'Denis',
    age: 41,
    gender: 'male',


    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I am ${this.gender}`);
    },

    changeName: function (newName) {
        this.name = newName;
    }
};

person.introduce();
person.changeName('Artur');
person.introduce();


//Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.

//Dog.eat(); // Вывод: Rex is eating.

const animal = {
    name: 'Masya',


    eat() {
        console.log(`${this.name} is eating`);
    }
};

const dog = {
    name: 'Barry',

    bark() {
        console.log(`${this.name} is barking`);
    }
};

dog.eat = animal.eat; // одалживание метода

dog.eat();
animal.eat();
dog.bark();


//Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8

// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {


    add(a, b) {
        return a + b;
    },

    subtrack(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5,3));
console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtrack.apply(null, [5, 3]));

//Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.

// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person {

    constructor(name, age) { // передаем вы конструктор нужные параметры
       this.name = name ;
       this.age = age;
    }
    
    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old`);
    }
};

const person2 = new Person('John', 25);
person2.introduce();

//Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и withdraw(amount) для снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка.

// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

class BankAccount {

    bankName = 'NuIBank';

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // constructor(bankName, accountNumber, balance) {
    //     this.bankName = bankName;
    //     this.accountNumber = accountNumber;
    //     this.balance = balance;
    // }

    deposit(amount) {
        this.balance = this.balance + amount;
        return console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
        if (this.balance >= 0){
            return console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else return console.log(`Insufficient funds in account ${this.accountNumber}`);
    }

    balanceRequest() {
        console.log(`Your balance in bank ${this.bankName} is ${this.balance}`);
    }

}

const account1 = new BankAccount("1234567890", 1000);

account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.balanceRequest();
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890