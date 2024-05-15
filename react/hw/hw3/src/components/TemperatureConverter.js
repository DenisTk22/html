/**
 * Задание 1: Температурный конвертер с Material UI
 * Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.
 */
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const ConvertToF = (celsius) => {
        const fahrenheit = (celsius * (9 / 5)) + 32;
        setFahrenheit(fahrenheit.toFixed(2));
    }

    const ConvertToC = (fahrenheit) => {
        const celsius = (fahrenheit - 32) * (5 / 9);
        setCelsius(celsius.toFixed(2));
    }

    const onInputCelsiusChange = (e) => {
        const { value } = e.target;
        setCelsius(value);
        ConvertToF(value);
    };

    const onInputFahrenheitChange = (e) => {
        const { value } = e.target;
        setFahrenheit(value);
        ConvertToC(value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onInput={ConvertToF} id="Celsius" label="Celsius" variant="outlined" value={celsius} onChange={onInputCelsiusChange} />
            <TextField onInput={ConvertToC} id="Fahrenheit" label="Fahrenheit" variant="outlined" value={fahrenheit} onChange={onInputFahrenheitChange} />
            <Button onClick={() => {setCelsius(""); setFahrenheit("");}} variant="contained">Clear</Button>
        </Box>
    )
}