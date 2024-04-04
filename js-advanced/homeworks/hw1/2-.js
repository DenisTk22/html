"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
    this.pizza = new Map();
    this.sushi = new Map();
    this.dessert = new Map();
    this.pizza.set("Маргарита", { name: "Олег", specialization: "Пицца" });
    this.pizza.set("Пепперони", { name: "Олег", specialization: "Пицца" });
    this.pizza.set("Три сыра", { name: "Олег", specialization: "Пицца" });
    this.sushi.set("Филадельфия", { name: "Андрей", specialization: "Суши" });
    this.sushi.set("Калифорния", { name: "Андрей", specialization: "Суши" });
    this.sushi.set("Чизмаки", { name: "Андрей", specialization: "Суши" });
    this.sushi.set("Сеякемаки", { name: "Андрей", specialization: "Суши" });
    this.dessert.set("Тирамису", { name: "Анна", specialization: "Десерты" });
    this.dessert.set("Чизкейк", { name: "Анна", specialization: "Десерты" });
    this.orders = new Map();
    this.orders.set("Пицца", this.pizza)
    this.orders.set("Суши", this.sushi)
    this.orders.set("Десерты", this.dessert)
    this.orders.set("Суши", this.sushi)
    this.orders.set("Десерты", this.dessert)
    this.orders.set("Суши", this.sushi)
    this.orders.set("Десерты", this.dessert)
    this.orders.set("Суши", this.sushi)
    this.orders.set("Десерты", this.dessert)
  }}
//использовать коллекции Map/Set в методе newOrder


  newOrder(client, ...items) {

}

// Можно передать внутрь конструктора что-либо, если необходимо.
// Например, можно передать коллекцию клиентов.
// const manager = new Manager(clients);



const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.