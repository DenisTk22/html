function sayHello() {
    console.log('Hello!');
}

console.log(sayHello.name); // выводит имя функции 'sayHello'

console.log(window.name); // выводит имя окна браузера 

console.log(frames[0].name); // выводит имя фрейма

const obj = {};
console.log(obj.name); // выводит undefined;

class Reclangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Reclangle(10, 20);
console.log(rect.constructor.name); // выводит имя класса "Rectangle"

