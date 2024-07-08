import { useState } from 'react';
import logo from '/vite.svg';
import {styled} from 'styled-components' // дает возможность прописывать стили в JS
import './Header.css'

const HeaderContainer = styled.header // компонет с примененными локализированными стилями
` 
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #646cff;
    background: green;
`

export default function Header() {
    const [now, setNow] = useState(new Date())
    // const now = new Date();
    setInterval(() => setNow(new Date()), 1000)
    return (
        <HeaderContainer>
            <img src={logo} alt='logo'/>
            <h3>Result University</h3>
            <span>Time now: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}