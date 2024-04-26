import { useEffect, useState } from "react";

export default function Timer() {
const [time, setTime] = useState(new Date());
useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
}, []);

    return ( 
        <div>
            <h2>Время  {time.toLocaleTimeString()}</h2>
        </div>
     );
}