try {
    undefined = 1;
}
catch (e) {
    console.log(e); // при отсутствие e, можно ввести текст ошибки
}
finally {
    console.log("Отлично");
}

//Пример
function divideNumbers(a, b) {
    try {
        const result = a / b;
        if (isNaN(result)) {
            throw new Error("Неверные данные");
        }
        console.log('Результат', result);
    } catch (e) {
        console.log('Ошибка', e);
    } finally {
        console.log('Операция деления завершена');
    }
}

divideNumbers(10, 0);

//Пользовательские ошибки
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError("Неверные данные");
    }
    console.log('Данные верны');
}

try {
    validateNumber('10');
} catch (e) {
    if (e instanceof CustomError) {
        console.error('Ошибка', e.message);
        console.log('Тип ошибки', e.message);
    } else {
        console.error('Произошла ошибка', e); // вывод ошибки по умолчанию
    }
}