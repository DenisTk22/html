/// Promise — это обещание, что мы сейчас запустим операцию, и она выполнится когда - то в будущем
let promise = new Promise(function (resolve, reject) { // resolve, reject коллбеки и должны будут вызваться при достижении какого-то результата
    // функция - исполнитель (является call back)
});

//Resolve вызывается при успешном завершении. Результат — value
//Reject вызывается при возникновении ошибки.Результат — error

//Свойства промиса
// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// * State(«состояние») — сначала «pending» («ожидание»), потом меняется на «fulfilled» при успешном выполнении(выполнился resolve) или на «rejected» при возникновении ошибок(выполнился reject)
// * Result(«результат») — во время ожидания он равен undefined, после изменится на value при успешном выполнении, либо на error при возникновении ошибок

//Использование промиса
//Для работы с промисами чаще всего применяется метод then()
//Метод then() принимает два аргумента:
// * onFulfilled — функция, вызываемая при успешном выполнении
// * onRejected — функция, вызываемая при возникновении ошибки

//promise.then(onfulfilled, onrejected);

//1Напишите функцию generateRandomNumber(), которая возвращает Promise, выполняющийся через 1 секунду и резолвит случайное число от 1 до 10. Если возникла ошибка при генерации числа, Promise должен быть отклонен с сообщением по ошибке

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000);
    })
};

generateRandomNumber()
    .then((number) => {
        console.log("Случайное число:", number);
    })
    .catch((error) => {
        console.log("Ошибка", error);
});

//Методы обработки ошибок
//Метод catch()
//Вызов catch(onrejected) аналогичен вызову then(null, onrejected).
// Если нам не нужна обработка данных, которые приходят при успешном
// выполнении промиса, метод then() мы вообще можем не вызывать.

//Метод finally()
// Метод finally() не принимает никаких аргументов и не возвращает
// никаких значений.Он также не знает ни о чём, что происходит
// в промисе.Если там произошла ошибка или сформировался какой - то
// результат, finally() пропустит его для последующих обработчиков.
// * finally() выполнится тогда, когда завершится ожидание(статус pending)
// у промиса.И нам нужно будет выполнить какие - то действия, не зависящие от его результата.

//2Напишите функцию fetchData(url), которая принимает URL в качестве аргумента и возвращает Promise, выполняющий запрос данных по указанному URL. Если запрос завершается успешно, Promise должен резолвить полученные данные. В случеа ошибки запроса, Promise должен быть отклонен с сообщением об ошибке
let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject("Ошибка загрузки данных"));
    });
};

//https://randombit.cat/roar.json
fetchData("https://api.example.com/data") // ошибочные данные
    .then(data => {
        console.log('Полученные данные:', data);
    })
    .catch(error => {
        console.log('Ошибка:', error);
    });

//3 Напишите функцию checkFileExists(file), которая принимает имя файлу в качестве аргумента и возвращает Promise, выполняющийся чепрез 2 сек. Promise должен резолвиться, если файл существует, и отклониться, если файла нет.

let checkIfFileExists = (file) => {};

let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIfFileExists(file);
            if (fileExists) {
                resolve('Файл существует');
            } else {
                reject('Файл не существует');
            }
        }, 2000);
    });
};

checkFileExists('file.txt')
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log('Ошибка', error)
    });


//4 then Напишите функцию calculateSum(a, b), которая принимает два числа и возвращает Promise. Promise Должен быть выполнен суммой двух чисел.
let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
};

calculateSum(3, 7)
    .then((result) => {
        console.log('Сумма чисел:', result);
    });

//5 Напишите функцию divideNumbers(a, b), которая принимает два числа и возвращает Promise. Promise должен быть выполнен деление. Если второе = 0, Promise должен быть отелонен с сообщением об ошибке.
let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Деление на 0');
        } else {
            const result = a / b;
            resolve(result);
        }
    });
};

divideNumbers(10, 0)
    .then((result) => {
        console.log('Результат деления:', result);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

///Цепочки промисов
new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result); // 1
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result); // 2
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result); // 4
});

///finally
let processData = (data) => {
    // Напишите логический процесс с данными
    // Верните результат процесса
    };


let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        //Выполнить операцию с данными
        let result = processData(data);

        //COmplete the Promise
        if (result) {
            resolve(result);
        }
        else {
            reject("Error");
        }

    }).finally(() => {
        console.log("Promise completed");
    });
};

performOperation('example')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


///Методы для работы с массивом промисов

//Promise.all()
// Принимает массив (или любой другой итерируемый объект) промисов и возвращае новый промис
// Переданные промисы будут выполнены по порядку последовательно, результатом выполнения будет массив результатов из каждого промиса
// Если в каком - то промисе произойдёт ошибка, то результатом выполнения будет эта ошибка, остальные результаты проигнорируются
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
])
    .then(result => console.log(result))
    .catch(error => console.log(error));

//Вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию checkServerResponse(urls), которая принимает массив URL-адресов в качестве аргумента и возвращает Promise. Promise должен быть выплнен с URL-адресом сервера, который первым ответил на запрос

let checkServerResponse = (urls) => {
    let promises = urls.map(url => fetch(url));

    return Promise.race(promises)
        .then(response => response.url);
};


let urls = ['https://example.com/api/1', 'https://example.com/api/2', 'https://example.com/api/3'];

checkServerResponse(urls)
    .then((fastestServer) => {
        console.log("Самый быстрый сервер", fastestServer);
    })
    .catch((error) => {
        console.log("Ошибка:", error);
    });