//
const obj = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

console.log(obj[2]);

//
const user = {
    'name' : 'Denis',
    'surname': 'Tkachev',
    'age': 40
};

console.log(user.name + '-' + user.surname + '-' + user.age);
console.log(`${user.name} - ${user.surname} - ${user.age}`);

//
// user.fatherName = prompt('Введите отчество');

console.log(user);

delete user.age;
console.log(user);

//
const arr1 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = {};

for (let i = 0; i < arr1.length; i++) {
    arr3[arr1[i]] = arr2[i];
};

console.log(arr3);

//возвести каждый элемент объекта в квадрат

const object = {x: 1, y: 2, z: 3};

Object.values(object).map(function(value) {
    console.log(value * value);
});

//Найдите сумму элементов приведенного объекта.
const obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
};

let sum = 0;
Object.values(obj1).map(function(value){
    Object.values(value).map(function (value) {
        sum = sum + value;
    });
});

console.log(sum);

//
const riddles = {
    question: 'Имя?',
    answer: 'Денис',
    counter: 0,
    askQuestion: function() {
        let userAnswer = prompt(this.question);
        if (userAnswer === this.answer) {
            console.log('Правильно');
        } else {
            console.log('Не правильно');
            this.counter++;
            if (this.counter < 3) 
            {this.askQuestion();}
        }
    }
};

riddles.askQuestion();