///Шаблонизатор handlebars

const handlebars = require('handlebars'); // Нужна установка --> npm i handlebars

const template1 = handlebars.compile('<p>{{someVar}}</p>');

const result = template1({ someVar: "Hello!" });

console.log(result);

//Условная конструкция. Где и когда выводить элемент

const template2 = handlebars.compile('{{#if bold}} <b>Hello!</b> {{else}} <p>Hello!</p> {{/if}}');

console.log(template2({ bold: true }));
console.log(template2({ bold: false }));

//Цикл по массиву

const items = [
    {
        name: 'first item', number: 3
    },
    {
        name: 'second item', number: 5
    },
];

const template3 = handlebars.compile('{{#each items}} <p>{{this.name}} {{this.number}} </p> {{/each}}');

console.log(template3({ items }));