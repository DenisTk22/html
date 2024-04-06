/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/

const BankAccount = class {
    #balance = 0;

    #isCorrect(amount) {
        if (!Number.isFinite(amount)) throw new Error("Сумма должна быть числом");
        if (amount <= 0) throw new Error("Сумма должна быть положительной или больше нуля");
        // if (amount.toString().split(".")[1]?.length > 2) throw new Error("Дробная часть суммы не может превышать два знака");
        const arr = amount.toString().split(".");
        if (arr[1]?.length > 2) throw new Error("Дробная часть суммы не может превышать два знака");
    }

    getBalance() {
        return Math.round(this.#balance * 100) / 100;
    }

    deposit(amount) {
        this.#isCorrect(amount);
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#isCorrect(amount);
        if (amount > this.#balance) throw new Error("Недостаточно средств");
        this.#balance -= amount;
    }
}
const account = new BankAccount();
console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.withdraw(50);
console.log(account.getBalance());
// account.withdraw(50.001);
account.withdraw('gtrt');