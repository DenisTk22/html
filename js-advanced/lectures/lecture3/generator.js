/**
 * Генераторы
Генераторы – это специальный тип функции, который может приостанавливать своё выполнение, принимать промежуточные данные и продолжать своё выполнение с новыми вводными.
Сам генератор записывается как функция – выражение со звёздочкой после ключевого слова function.
Промежуточные значения могут возвращаться с помощью оператора yield. Само выражение с объявлением генератора не вызывает его, а возвращает специальный объект генератора, с помощью которого мы можем управлять его выполнением.
Запустить выполнение генератора мы можем с помощью метода next().
 */

//Генератор для шенерации последовательности чисел

function* numberGenerator() {
    let number = 1;

    while (true) {
        yield number;
        number++;
    }
}

//Создаем экземпляр генератора
const generator = numberGenerator();

//Генерируем итератор, который будет возвращать следующее число при каждом вызове next()

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);