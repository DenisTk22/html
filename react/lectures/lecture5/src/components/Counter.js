import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

export const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' })
    };

    const deccrement = () => {
        dispatch({ type: 'INCREMENT' })
    };

    return (
        <div>
            <h1>Счетчик {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={deccrement}>deccrement</button>
        </div>
    );
}