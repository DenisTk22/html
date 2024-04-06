//разработать систему регистрации пользователей для веб-приложения

//глобальный объект
const App = {};

//Защищенные свойства класса
class User {
    #_name;

    constructor(name) {
        this.#_name = name;
    }
    get name() {
        return this.#_name;
    }
}

//Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        //Проверка введенных данных
        if (!name || !email || !password) {
            throw new Error('Не все данные были введены');
        }
        //Создание экземпляра класса User
        const user = new User(name);

        //Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };

        //Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер

        console.log('Пользователь успешно зарегистрирован', user.getName());
        console.log('Доп данные пользователя', userData);
    }
    catch (error) {
        console.error('Ошибка регистрации', error.message);
    } finally {
        console.log('Регистрация завершена');
    }
    };

    App.registerUser('Иван', 'XXXXXXXXXXXX', 'password');
    App.registerUser('Иван', '', 'password');




