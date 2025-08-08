import React, { useState, useEffect } from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent.js'
import Counter from './components/Counter.js'

function App() {
  const [text, setText] = useState('')
  const inputText = (event) => {
    setText(event.target.value)
  }

  const [response, setResponse] = useState(null)
  useEffect(() => {
    console.log('App.componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        console.log('App.response', data)
        setResponse(data)
      })
      .catch(error => {
        console.error('data loading error:', error)
      })
      return () => {
        console.log('App.componentWillUnmount')
      }
  }, [])

  console.log('App.render')

  return (
    <div className="App">
      <header className="App-header">
        <h1>First useEffect</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="React-doc"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <h2>enter the text:</h2>
        <input
          type="text"
          value={text}
          onChange={inputText}
          placeholder="enter smth.."
        />
        <h2>displayed text: {text}</h2>
      </div>
      {response && (
        <div>
          <h3>data from API:</h3>
          <p>id: {response.id}</p>
          <p>title: {response.title}</p>
        </div>
      )}
      <MyFirstComponent />
      <Counter />
    </div>
  );
}

export default App;