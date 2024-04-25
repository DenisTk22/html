///State (состояние)

import React, { useState } from 'react'
const [count, setCount] = useState(0);

//тоже самое
// const countState = useState(0);
// const count = countState[0];
// const setCount = countState[1];

export function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => setCount(count + 1);
    
  return (
    <div>
        <span className='counter'>{count}</span>
        <button className='counter-button' onClick={updateCount}>+1</button>
    </div>
  )
}