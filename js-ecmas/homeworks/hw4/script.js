// Домашнее задание

// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя(ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

//     Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен(с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const urlGet = 'https://jsonplaceholder.typicode.com/users';

const getUserData = (userId) => {
    let yourUser;
    fetch(urlGet)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Запрос от сервера не успешен')
            }
        })
        .then(data => {
            data.forEach(element => {

                if (element.id === userId) {
                    console.log(`Данные пользователя с id ${userId}:`, element);
                    yourUser = true;
                }
            })
            if (!yourUser) {
                throw new Error(`Пользователь с id ${userId} не найден`)
            }
        })
};

getUserData(9);

//""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения.Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// * Подсказка *
// // Пример использования функции
// const user = {
//     name: 'John Smith',
//     age: 30,
//     email: 'john@example.com'
// };

// saveUserData(user)
//     .then(() => {
//         console.log('User data saved successfully');
//     })
//     .catch(error => {
//         console.log(error.message);
//     });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST - запрос на URL - адрес / users с указанием типа содержимого application / json и сериализует объект с данными о пользователе в JSON - строку с помощью JSON.stringify().Если запрос успешен(с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени


const urlPost = "https://jsonplaceholder.typicode.com/users";
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

const saveUserData = (data) => {
    fetch(urlPost, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json"},
        })
        .then(async response => {
            if (response.ok) {
                const json = await response.json();
                console.log('User data saved successfully');
                console.log(JSON.stringify(json));
            } else {
                console.error('Что-то пошло не так...');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error.message);
        });
}

saveUserData(user);

//""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки(в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

//     // Пример использования функции
//     changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const myElementEl = document.getElementById('myElement');

const changeStyleDelayed = (element, delay) => {
        setTimeout(() => {
            element.style.fontSize = '24px';
            element.style.color = 'red';
        }, delay);
}

changeStyleDelayed(myElementEl, 2000);