import React from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from '../actions/actions2';

const TaskList = ({ tasks, dispatch }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                    <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

// Функция connect используется для привязки контейнера React к Redux.
// Это означает, что вы можете использовать функцию connect для: того чтобы подписаться на хранилище
// и сопоставить его состояние с вашими props.действия по отправке и сопоставление обратных вызовов в ваши props

export default connect(mapStateToProps)(TaskList);