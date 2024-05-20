import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h1>Главная страница</h1>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/about'>О нас</Link></li>
            </ul>
        </>
    )
}