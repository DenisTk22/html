import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/actions';

const TaskInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTask(input));
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TaskInput;