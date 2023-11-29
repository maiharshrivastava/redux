/* eslint-disable no-undef */
import React from 'react';  // Import React
import logo from './logo.svg';
import './App.css';
import Counter from './components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();  // Correct the variable name to dispatch

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

    </div>
  );
}

export default App;
