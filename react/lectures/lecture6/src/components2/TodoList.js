import React, { useContext } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../actions2/todoActions';
import { FilterContext } from '../contexts2/FilterContext';
import withFilter from '../hoc2/withFilter';


const TodoList = () => {
    //Получаем список задач из Redux хранилища
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const {filter} = useContext(FilterContext);

    //Применяем фильтр к задачам
    const filteredTodos = withFilter(todos, filter);

    const handleToggleTodo = (id) => {
        //Отправляем действие для изменения статуса задачи
        dispatch(toggleTodo(id));
    };

    return (
        <ul>
            {filteredTodos.map(todo => (
                <li key={todo.id} 
                onClick={() => handleToggleTodo(todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}} // стиль для выполнено или не выполнено
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}
export default TodoList;