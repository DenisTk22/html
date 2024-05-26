import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions2';

const AddTaskForm = ({ dispatch }) => {
    const [input, setInput] = useState('');

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
            <button type="submit">Add Task</button>
        </form>
    );
};

export default connect()(AddTaskForm);