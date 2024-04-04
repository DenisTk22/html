"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

В методе newOrder нужно предусмотреть сложение заказа, если клиент дозаказал еще.

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
    this.cookers = new Map();
    this.clients = new Set();
    this.cookers.set("Маргарита", "Олег");
    this.cookers.set("Пепперони", "Олег");
    this.cookers.set("Три сыра", "Олег");
    this.cookers.set("Филадельфия", "Андрей");
    this.cookers.set("Калифорния", "Андрей");
    this.cookers.set("Чизмаки", "Андрей");
    this.cookers.set("Сеякемаки", "Андрей");
    this.cookers.set("Тирамису", "Анна");
    this.cookers.set("Чизкейк", "Анна");
    this.orders = [];
    this.ordersOfClients = new Map();
  }

  newOrder(client, ...order) {
    // console.log(client);
    // console.log(...order);
    // console.log(this.orders);
    // let clients = new Set(this.orders.client);
    // this.clients.add(client);
    // console.log(this.clients);
    console.log(`Клиент ${client.firstname} ${client.lastname} заказал:`);
    if (this.ordersOfClients.has(client)) { //if (this.clients.has(client))
      console.log(`Такой клиент есть ${client}`);
      // const a = this.ordersOfClients.get(client);
      // console.log(`Заказ: ${a}`);
      [...order].push(this.ordersOfClients.get(client));
      // console.log(...order);
      console.log(...order);
      for (const item of order) {
        this.orders.forEach(el => { //this.orders.forEach(el)
          if (item.name === el.name) {
            item.quantity = item.quantity + el.quantity
          }
        });
        console.log(`${item.type} "${item.name}" - ${item.quantity}; готовит повар ${this.cookers.get(item.name)}`);
      }
    } else {
      for (const item of order) {
        console.log(`${item.type} "${item.name}" - ${item.quantity}; готовит повар ${this.cookers.get(item.name)}`);
        this.orders.push({ name: item.name, quantity: item.quantity, type: item.type });
        // console.log("Был добавлен заказ:" + `${this.orders}`);
        // this.orders.push({ client: client, name: item.name, quantity: item.quantity });
        // this.ordersOfClients.push({client:{name: item.name, quantity: item.quantity, type: item.type}});
        // ● map.set(key, value)
        this.ordersOfClients.set(client, {name: item.name, quantity: item.quantity, type: item.type});
      }
      // this.clients.add(client);
      // this.ordersOfClients.set(client, {name: item.name, quantity: item.quantity, type: item.type});
      // this.ordersOfClients.set(client);
      console.log(this.ordersOfClients.get(client));
    }
  }
  

};

// Можно передать внутрь конструктора что-либо, если необходимо.
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


throw new Error("Десерт " + "Трубочка с вареной сгущенкой" + " - такого блюда не существует.");