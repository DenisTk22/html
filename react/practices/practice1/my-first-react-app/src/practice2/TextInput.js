// Создать компонент TextInput, который содержит текстовое поле ввода и отображает введённый текст под ним в реальном времени.
import React, { useState } from 'react';

const TextInput = () => {

    const [text, setText] = useState('');

    const addText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <h3>{text}</h3>
            <input type="text" onChange={addText}/>
        </>
    )
}

export default TextInput;