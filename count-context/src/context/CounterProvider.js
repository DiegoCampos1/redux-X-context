import React, { useState } from 'react';
import CounterContext from './CounterContext';

const CounterProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [news] = useState([1,2,3,4,5,6,7,8,9,10])

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const incrementByAmount = (amount) => setValue(value + amount);

  const contextValue = {
    value,
    news,
    increment,
    decrement,
    incrementByAmount,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
