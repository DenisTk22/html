//Создать компонент TodoList, который позволяет добавлять элементы в список дел через текстовое поле ввода. Список должен обновляться при добавлении нового дела.

import React, { useState } from 'react';

const TodoList = () => {

    const [todos, setTodos] = useState([]); //состояние для хранения списка дел
    const [currentTodo, setCurrentTodo] = useState(''); // Состояние для хранения текущего ввода в текстовом поле

    //Обработчик добавления нового дела в список
    const addTodo = (e) => {
        e.preventDefault(); // предотвращаем перезагрузку формы
        if (!currentTodo.trim()) return; //ишнорируем пустые строки
        setTodos([...todos, currentTodo]) //Добавдяем текущее дело в список
        setCurrentTodo(''); //очищаем текстовое поле
    };
    //обработчик изменения текстового поля
    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value);
    };

    return (
        <>
            <form onSubmit={addTodo}>
                <input type='text' value={currentTodo} onChange={handleInputChange} />
                <button type="submit">Добавить задачу</button>
            </form>
            <ul>
                {todos.map((todo, i) =>(
                    <li key={i}>{todo}</li> // Используем индекс как ключ, что подходит для данного примера
                ))}
            </ul>
        </>
    )
}

export default TodoList;