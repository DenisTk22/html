class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.read = false;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
        return this; // после этого метода опять возвращается сам объект, можно вызывать цепочку методов
    }

    changeAuthor(newAuthor) {
        this.author = newAuthor;
        return this;
    }

    changeTitle(newTitle) {
        this.read = true;
        return this;
    }
}

const book1 = new Book("Harry Potter", "J.K. Rowling");

//По умолчанию у объекта можно вызвать один метод через точку:
book1.readed();
// book1.readed().changeAuthor(newAuthor) - работать не будет

//Чтобы можно было вызывать несколлько методов через точку, нужно у метода прописать: return this;
book1.readed().changeAuthor("kjuh").changeTitle("rthrt");
