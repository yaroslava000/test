import React, { useState } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0)
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h3>counter:</h3>
            <button onClick={decrement}>-</button>
            <p>current value: {count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;