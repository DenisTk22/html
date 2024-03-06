///async/await
// Функционал async / await для работы с асинхронным кодом(а именно для работы с
// обещаниями) появился в JS с приходом стандарта ES7, и пока еще не слишком
// поддерживается браузерами, но есть полифилы для работы с ними.
// Суть подхода async / await - это писать асинхронный код так, будто он выполняется
// синхронно, но при этом не блокирует основной поток выполнения.Подход состоит
// из применения двух операторов:
// ● async - пишется перед функцией и превращает любую функцию в обещание, а
// также позволяет использовать второй оператор await внутри себя.
// ● await - оператор пишется перед вызовом асинхронной функции, что
// заставляет код остановиться в этом месте, пока асинхронная функция не
// вернет результат.
// Давайте посмотрим на пример:

// Листинг 9
const getUser = async (url) => {
// Делаем запрос, и ждем его результат (указание await), который будет сохранен в константу response.
    const response = await fetch(url);
    // Выполняем еще один асинхронный метод, преобразования в
    // текст, также ждем результат, который сохраняется в константу
    // пользователь.
    const user = await response.text();
    console.log(user);
}

getUser('https://api.github.com/users/octocat');
// Вывод в консоль.
// {
// "login": "octocat",
// "id": 583231,
// ...
// }

// Синтаксис async / await позволяет писать код очень линейно и чисто.
// “Запланированная асинхронность” - setTimeout, setInterval
// Бывают моменты, когда нам синхронный код превратить в асинхронный.Например мы не хотим делать запрос к серверу в тестовом приложении, а хотим просто имитировать задержку запросов, или вспомните самый первый пример из урока, там нам нужно было сгенерировать много дат, но при этом код был синхронным, и мы занимали весь поток так, что исполнение других сценариев на странице останавливалось.Вот в таких случаях нам может пригодится превращение синхронного кода в асинхронный, и сделать это можно с помощью функции setTimeout и setInterval, которые автоматически помещают функции обратного вызова в очередь отложенных задач, и которые будут выполняться асинхронно.
// Давайте возьмем наш первый пример с генерацией дат, и перепишем его так, чтобы он стал асинхронным и не блокировал основной поток:

// Листинг 10
const timerId = setInterval(() => {
    if (counter > amount) {
// После того как наш счетчик достигнет нужного количества итераций, мы должны очистить таймер, чтобы итерации больше не выполнялись.
            clearInterval(timerId);
        console.log('End long calculations');
    }
// Добавим вывод нашего счетчика через каждые 10000 итераций, чтобы видеть что наш код работает.
        if(counter % 10000 === 0) {
        console.log('working: ', counter);
    }
    const newDate = new Date(counter);
    counter++;
}, 0);

// Start long calculations
// working: 0
// working: 10000
// working: 20000
// ...
// End long calculations

// Алгоритм выполняется значительно дольше, чем это было в синхронном коде, потому что каждая итерация представляет из себя целый набор действий, движку JavaScript необходимо создать функцию обратного вызова при каждой итерации, вызвать API среды выполнения(setInterval), которая поставит нашу функциюобратного вызова в очередь отложенных задач, после чего цикл событий должен дождаться когда стек вызовов будет пустым, и переместить функцию обратного вызова в стек вызовов, где она и будет исполнена.Зато такой код не блокирует страницу и можно выполнять другой код.
