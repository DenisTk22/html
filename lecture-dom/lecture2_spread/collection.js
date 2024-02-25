const divElement = document.querySelector('.collection');
console.log(divElement.childNodes.length); // получим коллекцию в виде NodeList - 7
console.log(divElement.children.length); // получим коллекцию в виде HTMLCollection - 3

// чтобы посмотреть элементы в каждой коллекции, преобразуем коллекции в массив, с помощью статистического метода Array.from и оператора spread

Array.from(divElement.childNodes).forEach((childNodes) => {
    console.log('childNode "%s" типа "%d"', childNodes.nodeName, childNodes.nodeType);
});

[...divElement.children].forEach((child) => { // с помощью оператора spread разбиваем HTMLCollection на составные части и применям метод forEach
    console.log('child "%s" типа "%d"', child.nodeName, child.nodeType);
});