/**
 * Задание 2: Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.
 */
import React, { useState } from "react";
import {TextField, Button, Card, CardContent, IconButton, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const inputNewTask = (e) => {
        setNewTask(e.target.value);
    };

    const addNewTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (i) => {
        const updatedTasks = tasks.filter((_, i) => i !== i);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <TextField
                value={newTask}
                onChange={inputNewTask}
                label="Input your task"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button onClick={addNewTask} variant="contained" color="primary">
                Add Task
            </Button>
            {tasks.map((task, i) => (
                <Card key={i} variant="outlined" style={{ marginTop: "1rem" }}>
                    <CardContent>
                        <Typography>{task}</Typography>
                        <IconButton onClick={() => deleteTask(i)} aria-label="delete">
                        <DeleteIcon />
                        </IconButton>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};