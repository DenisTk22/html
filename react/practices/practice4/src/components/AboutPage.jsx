import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
            <h1>О нас</h1>
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/about'>О нас</Link></li>
            </ul>
        </>
    )
}