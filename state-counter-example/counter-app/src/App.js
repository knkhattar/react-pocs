import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // title is updated after dom chages kk
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
