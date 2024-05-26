import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/actions';

const AddProduct = () => {
    //Локальное состояние для текста новой задачи
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        // Отправляем действие для добавления новой задачи
        dispatch(addProduct(productName, description, price));
        setText('');
    }

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddProduct}>Add product</button>/
        </div>
    );
};
export default AddProduct;