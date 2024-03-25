const Joi = require('joi');

//запрос для валидации
const articleScheme = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});

const idScheme = Joi.object({
    id: Joi.number().required(),
});

module.exports = { articleScheme, idScheme }