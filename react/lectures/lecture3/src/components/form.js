import React, { useState, useEffect } from 'react';

const InputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    useEffect(() => { //для выполнения какого-либо действия
        console.log('Input value changed:', inputValue);
    }, [inputValue]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedValue && <p>Submited value: {submittedValue}</p>}
        </>
    );
}

export default InputForm;