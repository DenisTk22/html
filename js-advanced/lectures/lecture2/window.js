///Рабботы с window
window.open('http:/....');
window.close();
const windowWidth = window.innerWidth  //получение ширины окна

//Рабботы с globaThis
const globalObject = globalThis; //получение глобального объекта globalThis
globalThis.newVariable = 'Hello, wold!'; //создание новой переменной в глобальном объекте globalThis
const globalVariable = globalThis.window === globalThis.self ? 'Window' : "Worker"; //получает доступ к глобальным переменным из разных сред исполнения

