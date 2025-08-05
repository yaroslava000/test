import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent.js'
import Counter from './components/Counter.js'

function App() {
  const [text, setText] = useState('')

  const inputText = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>slava</h1>
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
      <MyFirstComponent />
      <Counter />
    </div>
  );
}

export default App;