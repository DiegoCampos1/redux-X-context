import React, { useEffect } from 'react';
import styles from './Counter.module.css';
import ButtonIncrement from './components/ButtonIncrement';
import ButtonDecrement from './components/ButtonDecrement';
import CountComponent from './components/CountComponent';
import InputAmount from './components/InputAmount';
import { NewsLetters } from './components/NewsLetters';

export const Counter = () => {

  useEffect(() => {
    console.log(`Componente Counter foi renderizado`)
  })

  return (
    <>
      <div className={styles.row}>
        <ButtonDecrement />
        <CountComponent />
        <ButtonIncrement />
      </div>
      <div className={styles.row}>
        <InputAmount />
      </div>
      <div className={styles.column}>
        <NewsLetters />
      </div>
    </>
  );
};
