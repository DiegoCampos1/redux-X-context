import React from 'react';
import logo from './logo.svg';
import { Counter } from './Counter';
import './App.css';
import CounterProvider from './context/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
