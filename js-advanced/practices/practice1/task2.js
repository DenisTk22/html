/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

// const library = {
//     books, // books: books,
//     *[Symbol.iterator]() { // * - создает функцию генератор (можно возвращать несколько значений)
//         for (const book of this.books) {
//             yield book; // у функции генератор вместо return пишится yield
//         }
//     }
// };


const library = {
    books,
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () =>{
                if (i < this.books.length) {
                    return {
                        value: this.books[i++],
                        done: false,
                    };
                }
                return {
                    value: undefined,
                    done: true,
                };
            },
        };
    }

}

const lib = library[Symbol.iterator]();
console.log(lib);

for (const book of library) {
    console.log(book);
}

// console.log(lib.next());
// console.log(lib.next());
// console.log(lib.next());
// console.log(lib.next());
// console.log(lib.next());