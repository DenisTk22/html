import React, {useContext} from "react";
import {FilterContext} from "../contexts2/FilterContext";

const TodoFilter = () => {
    // Получаем текущий фильтр из контекста
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        //Устанавливаем выбранный фильтр
        setFilter(e.target.value);
    };

    return (
        <select value={filter} onChange={handleChange}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='active'>Active</option>
        </select>
    );
};

export default TodoFilter;