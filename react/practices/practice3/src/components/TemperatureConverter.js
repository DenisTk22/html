/**
 * Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.
 */
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TemperatureConverter() {
  return 
    (
        <div>
            {/* <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            > */}
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            {/* </Box> */}
            <Button variant="contained">Contained</Button>
        </div>
    )
}