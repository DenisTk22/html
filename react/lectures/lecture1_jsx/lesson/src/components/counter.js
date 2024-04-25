import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <span>{count}</span>
            <button onClick={updateCount}>click +1</button>
            {/* <button onClick={() => {setCount(item => ++item)}}>click +1</button> */}
            {/* или  {setCount(count + 1)}*/}
        </div>
    )
}