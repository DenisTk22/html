import { useState } from 'react';
import logo from '/vite.svg';

export default function Header() {
    const [now, setNow] = useState(new Date())
    // const now = new Date();
    setInterval(() => setNow(new Date()), 1000)
    return (
        <header>
            <img src={logo} alt='logo'/>
            <h3>Result University</h3>
            <span>Time now: {now.toLocaleTimeString()}</span>
        </header>
    )
}