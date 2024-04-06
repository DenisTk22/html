/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputEl = document.querySelector(".number-input");
const checkButton = document.querySelector(".check-button");
const messageEl = document.querySelector(".message");

checkButton.addEventListener("click", () => {
    try {
        const inputValue = Number(inputEl.value);
        if (isNaN(inputValue)) {
            throw new Error("Введенное значение не является числом");
        } else if (inputValue !== "") {
            throw new Error("Введите значение");
        } messageEl.textContent = "Введенное значение является числом";
    } catch (error) {
        messageEl.textContent = error.message;
    }
});