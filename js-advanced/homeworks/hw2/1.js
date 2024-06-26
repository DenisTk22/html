"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
class Library { // в классах не стоит использовать стрелочные функции просто так, иначе функции будут создаваться для каждого объекта отдельно, будет гораздо больше памяти занимать все это дело.

    #books = [];

    constructor(books) {
        this.#books = books;
        const uniqueBooks = new Set(books);
        if (uniqueBooks.size !== books.length) {
            throw new Error("Список книг содержит дубликаты!");
        }
    }

    allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Книга уже существует!");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error("Книга не найдена!");
        }
        this.#books = this.#books.filter((book) => book !== title);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

}

const library = new Library(["Маугли", "Тарзан", "Волшебник изумрудного города"]);

console.log(library.allBooks());

library.removeBook("Тарзан");
// library.removeBook("Нарзан");
library.allBooks();

library.hasBook("Волшебник изумрудного города");
library.addBook("Маугли");