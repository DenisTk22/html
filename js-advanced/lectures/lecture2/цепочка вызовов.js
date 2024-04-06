//Опциональная цепочка вызовов методов и оператор нулевого слияния
//Объект с информацией о пользователе
const user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        street: "Main Street",
    },
    contacts: {
        phone: "555-1234",
        email: "john@example.com",
    }
};

//Опциональная цепочка вызовов методов
const email = user?.contacts?.email; // ? - сначало проверяет есть ли это
console.log(email); // "john@example.com"

//Если значение не определено или равно null или undefined, используется значение по умолчанию
const defaultValue = user?.otherValue ?? "Unknown";
console.log(defaultValue); // "Unknown"

//Опциональная цепочка вызовов методов и оператор нулевого слияния вместе
const streetName = user?.address?.street ?? "Unknown";
console.log(streetName); // "Main Street"