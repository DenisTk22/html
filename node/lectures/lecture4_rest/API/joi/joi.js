///Валидация данных, библиотека JOI
const Joi = require('joi');

const schema = Joi.string(); // валидация данных как строку

const result = schema.validate('Hello, Denis!');

console.log(result);
console.log(JSON.stringify(result, null, 2));
console.log(result.error.details);

//проверка на число, на длину строки

const schema1 = Joi.object({
    id: Joi.number().required(), // дб число, обязательное поле
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required()
});

const result1 = schema1.validate({
    id: 1,
    title: '1',
    content: '1',
});

console.log(result1.error.details);