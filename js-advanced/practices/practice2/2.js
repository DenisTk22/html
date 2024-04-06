/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/
class User {
    constructor(name, surname) {
        if (this.constructor === User) { // нельзя создать экземпляр абстрактного класса User
            throw new Error("User is abstract class");
        }
        this.name = name;
        this.surname = surname;
    }
}

class PremiumUser extends User {
    constructor(name, surname, premiumExpiration) {
        super(name, surname); // super вызывается в первую очередь, до 
        this.premiumExpiration = premiumExpiration;
    }
}
class RegularUser extends User {} // super вызовется по умолчанию

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        return `Premium user ${user.name} ${user.surname} expires in ${user.premiumExpiration}`;
    } else if (user instanceof RegularUser) {
        return `Regular user ${user.name} ${user.surname}`;
    }
    return "Unknown user";
}


const premiumUser = new PremiumUser("Jane", "Doe", "2023-01-01");
const regularUser = new RegularUser("Bob", "Smith");
console.log(getAccountInfo(premiumUser)); // "Premium user Jane Doe expires in 2023-01-01"
console.log(getAccountInfo(regularUser)); // "Unknown user"
const user1 = new User("John", "Doe");
console.log(getAccountInfo(user1)); // "Unknown user"

