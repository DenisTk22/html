/**
 * <h1>Информация о случайном пользователе</h1>
    <label for="sort-select">Сортировка:</label>
    <select name="" id="sort-select">
        <option value="name">По имени</option>
        <option value="age">По возрасту</option>
    </select>
    <div id="user-list"></div>
 */

    //Полдучаем ссылки на элементы старницы
const userListElement = document.getElementById("user-list");
const sortSelect = document.getElementById("sort-select");

// Загружаем данные о пользователях с помощью API
fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(data => {
        let users = data.results; // Получаем массив пользователей
        renderUsersList(users); // Отрисовываем пользователей

        //Обработка события изменения выбранного значения в селекте
        sortSelect.addEventListener("change", () => {
            const selectedValue = sortSelect.value; // Получаем выбранное значение
            users = sortUsers(users, selectedValue); // Сортируем пользователей
            renderUsersList(users); // Отрисовываем сортированных пользователей
        });
    })
    .catch(error => console.error(error));

    //Функция для вызова списка пользователей на страницу
    function renderUsersList(users) {
        userListElement.innerHTML = "";
        users.forEach(user => {
            const userElement = createUserElement(user);
            userListElement.appendChild(userElement);
        });
    }

    //Функция для создания элемента пользователя
    function createUserElement(user) {
        const userContainer = document.createElement("div");
        userContainer.classList.add("user");

        const userName = document.createElement('p');
        userName.textContent = `Name: ${user.name.first} ${user.name.last}`;
        userContainer.appendChild(userName);

        const userAge = document.createElement('p');
        userAge.textContent = `Age: ${user.dob.age}`;
        userContainer.appendChild(userAge);

        return userContainer;
    }

    //Функция для сортировки пользователй
    function sortUsers(users, sortBy) {
        return users.sort((a, b) => {
        if (sortBy === "name") {
            return a.name.first.localeCompare(b.name.first);
        } else if (sortBy === "age") {
            return a.dob.age - b.dob.age;
        }
    });
}