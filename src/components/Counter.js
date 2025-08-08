import React, { useState, useEffect } from 'react';

const Counter = () => {
    const[count, setCount] = useState(0)
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        console.log('Counter.componentDidMount')
        return () => {
            console.log('Counter.componentWillUnmount')
        }
    }, [])

    useEffect(() => {
        console.log('Counter.componentDidUpdate.count', count)
    }, [count])

    console.log('Counter.render')
    

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