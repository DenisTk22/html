import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
            <h2>О нас</h2>
            <ul style={{listStyleType: 'none'}}>
                <li>Переход на страницу <Link to='/'>Главная</Link></li>
                <li>Переход на страницу <Link to='/about'>О нас</Link></li>
            </ul>
        </>
    )
}