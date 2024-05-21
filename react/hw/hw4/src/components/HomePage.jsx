import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h2>Главная страница</h2>
            <ul style={{listStyleType: 'none'}}>
                <li>Переход на страницу <Link to='/'>Главная</Link></li>
                <li>Переход на страницу <Link to='/about'>О нас</Link></li>
            </ul>
        </>
    )
}