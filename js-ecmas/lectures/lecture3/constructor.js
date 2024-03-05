//Листинг 13.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    // Делаем ссылку на прототип от родителя.
    this.__proto__ = DancingSeries;
}
// Создадим экземпляр нового объекта.
const Samba1 = new Samba(1014778);

console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner
// I am cleaning... I have been started: 1 times.
// Вместо создания конкретного объекта, мы создали функцию, которая делает все то же самое, только записывает свойства и методы через this.А чтобы создать непосредственно сам объект, нам нужно вызвать эту функцию через оператор new.
// Почему именно через него и что он делает мы разберем ниже, а пока давайте создадим несколько экземпляров робота Samba, чтобы увидеть всю прелесть конструкторов:
// Листинг 14.

// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос Samba смотри в листинге

// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];

for (let index = 0; index < 10; index++) {
// Создадим экземпляр нового объекта и добавляем его в массив наших роботов, каждый с уникальным серийным номером.
    robots.push(new Samba(index));
}
console.log(robots[3].serialNumber); // 3
console.log(robots[7].serialNumber); // 7

// Далее мы можем взаимодействовать с нашим массивом роботов как нам удобно, обрабатывать его в циклах, обращаться к каждому роботу по отдельности, и нам понадобилось всего четыре строчки кода чтобы создать такое количество роботов.
// Затронем еще момент об установке прототипа для объектов создаваемых конструктором.Мы можем указывать this.__proto__ для установки прототипа, а можем указать наш прототип в prototype свойстве самого конструктора вот так:
// Листинг 15.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
}
// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba2 = new Samba(1014778);
console.log(Samba2.serialNumber); // 1014778
console.log(Samba2.startCleaning()); // I am the method of
VacuumCleaner
// I am cleaning... I have been started: 1 times.
