console.log(document.documentElement); // тег <html>
console.log(document.head); // тег <head>
console.log(document.body); // тег <body>

console.log(document.body.childNodes); // все дочерние узлы
console.log(document.body.firstChild); // первый дочерний узел
console.log(document.body.lastChild); // последний дочерний узел
console.log(document.body.children); // все дочерние узлы, кроме тегов

//Сделаем в переборе коллекции вывод проверки, является ли он div
for (let val of document.body.children) {
    console.log(val.localName === 'div' ? "Это DIV" : "Это не DIV");
}

for (let val of document.body.childNodes) {
    console.log(val.nodeType);
}
//https://dom.spec.whatwg.org/#node

for (let val of document.body.childNodes) {
    console.log(val.nodeValue);
}