// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

//2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let count = 0;

    let counter = {
        increment: () => {
            console.log(++count);
        },
        decrement: () => {
            console.log(--count);
        }
    }
    return counter;
};

const counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();

//3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const rootElement = document.getElementById('root');

function findElementByClass(rootElement, classElement) {
    if (rootElement.hasChildNodes()) {
       for (let element of rootElement.children) {
           if (element.className === classElement) return element;
           findElementByClass(element, classElement);
      }
   }
}

const targetElement = findElementByClass(rootElement, 'class1');

console.log(targetElement);