import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/actions2';

const initialState = {
    tasks: [],
};

let nextTaskId = 0;

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: nextTaskId++, text: action.payload, completed: false },
                ],
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default tasksReducer;