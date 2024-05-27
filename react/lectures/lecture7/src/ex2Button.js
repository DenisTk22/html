import React from 'react';
import { useDispatch } from 'react-redux';

export function MyButton() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: 'BUTTON_CLICKED', payload: 'Hello' });
    };

    return <button onClick={handleClick}>Click Me</button>;
}