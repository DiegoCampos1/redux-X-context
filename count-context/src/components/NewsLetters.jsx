import React, { useContext, useEffect } from 'react';
import CounterContext from '../context/CounterContext';
import FakesLetter from './FakesLetter';

export const NewsLetters = () => {
  const { news } = useContext(CounterContext);

  useEffect(() => {
    console.log('Componente NewsLetters renderizou');
  });

  return (
    <div>
      {news.map((number) => (
        <FakesLetter newLetter={number} />
      ))}
    </div>
  );
};
