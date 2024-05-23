import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = () => {
    //Локальное состояние для текста новой задачи
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        // Отправляем действие для добавления новой задачи
        dispatch(addTodo(text));
        setText('');
    }

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodo}>Add task</button>/
        </>
    );
};
export default AddTodo;