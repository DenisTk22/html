///Методы для установки прототипа.
// Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта - это getPrototypeOf и setPrototypeOf.Эти методы не доступны в браузере Internet Explorer версии ниже 10.
// getPrototypeOf
// Метод getPrototypeOf позволяет получить ссылку на объект прототип. 
// Давайте узнаем какой объект является прототипом для нашего объекта Djaiv, потом посмотрим кто является его прототипом и кто является прототипом его прототипа:

// Листинг 9.
// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]
// В последнем прототипе мы не стали смотреть свойство model, т.к.там его нет, мы добрались до самого высокого родителя, которым является объект Object, все объекты наследуются от него.Если мы попытаемся получить его прототип, то в ответ получим null, т.к.Объект Object не имеет прототипа.
///setPrototypeOf
// Зачем может понадобиться знать прототип объекта ? Давайте создадим другую серию роботов - musicSeries, с немного другим функционалом(они будут уметь мыть полы), и установим её в качестве прототипа для нашего нового пылесоса Blues. Так как новая серия будет иметь дополнительный функционал, которого нет в серии DancingSeries, прежде чем вызвать такой функционал у определенного объекта, стоит проверить, кто его родитель.Для установки прототипа используем метод setPrototypeOf - он принимает два аргумента, первый это объект для которого устанавливается прототип, второй - это объект который будет прототипом для первого.

// Для начала создадим объект серии:

// Листинг 10.
// Объект робот-пылесос MusicSeries.
const MusicSeries = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,

    // Добавляем новый метод.
    startWipe: function () {
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};
// Объект робот-пылесос MusicSeries1.
const MusicSeries1 = {
    // Объявляем новые свойства и переопределяем свойство model.
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    // Добавляем новый метод.
    startWipe: function () {
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
            console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
    // Делаем ссылку на прототип от родителя.
    __proto__: VacuumCleaner,
};
// Создадим нашего нового робота:
// Листинг 11.
// Объект робот-пылесос Blues.
const Blues = {
    // Обновляем свойства под конкретную модель.
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries); // назначаем прототипы для Blues от MusicSeries
// Теперь можем попробовать вызвать методы наших роботов, проверяя кто является их прототипом:
// Листинг 12.
// Объявление базового родительского объекта смотри в листинге 1.
// Объявление DancingSeries смотри в листинге 2.
// Объект Djaiv смотри в листинге 5.
// Объявление MusicSeries смотри в листинге 10.
// Объект Blues смотри в листинге 11.
if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
    Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === 'music series') {
    Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function