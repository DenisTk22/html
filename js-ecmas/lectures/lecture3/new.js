// Оператор new
// Оператор new позволяет создавать новые объекты, используя для этого функцию - конструктор.Работает он следующим образом:
// 1. Создает пустой объект, который наполнит всем необходимым.
// 2. Устанавливает этот объект как this для функции конструктора, чтобы можно было использовать this внутри функции и добавлять свойства и методы в этот объект.
// 3. Вызывает функцию конструктор для инициализации объекта.
// 4. Если у функции конструктора есть свойство prototype, устанавливает значение этого свойства как прототип для нового объекта(свойство __proto__).
// 5. Устанавливает свойство constructor объекта ссылкой на функцию конструктор.
// 6. Если функция конструктор не возвращает ничего или возвращает какое - то примитивное значение, то оператор new вернет новый созданный и наполненный объект, если конструктор возвращает объект, то оператор new вернет этот объект.
// Не так сложно, давайте попробуем создать свою версию оператора new в виде функции:
// Листинг 16.
// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
    // Создаем новый объект.
    const obj = {};
    // Установим новому объекту прототипом прототип функции - конструктора
    Object.setPrototypeOf(obj, constructor.prototype);
// Вызовем функцию-конструктор, передав ей как this созданный на шаге 1 объект, и передадим остальные аргументы,если они были переданы в createObject
    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));

// Вернем новый объект, если конструктор вернул примитивное значение или undefined, иначе вернем то, что вернул конструктор.
if(!result || typeof result === 'string' || typeof result
            === 'number' || typeof result === 'boolean') {
        return obj
    } else {
        return result;
    }
}

// Создадим экземпляр нового объекта.
const Samba1 = createObject(Samba, 1014778);
// Проверим установку свойств в конструкторе.
console.log(Samba1.serialNumber); // 1014778
// Проверим, что прототип установился корректно, и мы можем вызывать методы из родительских объектов.
console.log(Samba1.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba1.startCleaning()); // I am the method of
VacuumCleaner
// I am cleaning... I have been started: 1 times.
// Проверим присвоение конструктора.
console.log(Samba1.constructor); // function Object() { [native code] }

// ❗Свойство __proto__ объекта и свойство prototype у функции конструктора это не одно и то же. Свойство __proto__ есть у экземпляра объекта, и оно позволяет находить родителей объекта, свойство prototype выполняет служебную функцию при создании экземпляра объекта через оператор new.
//Посмотрите на пример кода, который расставит точки на «i».

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

// Посмотрим на свойства __proto__ и prototype
console.log(Samba2.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}

console.log(Samba2.prototype); // undefined
console.log(Samba2.__proto__ === Samba.prototype); // true
// ❗ В экземпляра объекта нет свойства prototype, данные из него перешли в свойство __proto__.