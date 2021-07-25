import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { newsFake } from '../redux/counterSlice';
import FakesLetter from './FakesLetter';

export const NewsLetters = () => {
  const news = useSelector(newsFake);

  useEffect(() => {
    console.log('Componente NewsLetters foi renderizado');
  });

  return (
    <div>
      {news.map((number) => (
        <FakesLetter newLetter={number} />
      ))}
    </div>
  );
};
