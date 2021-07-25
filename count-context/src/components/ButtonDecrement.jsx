import React, { useContext, useEffect } from 'react';
import styles from '../Counter.module.css';
import CounterContext from '../context/CounterContext';

function ButtonDecrement() {
  const { decrement } = useContext(CounterContext)

  useEffect(() => {
    console.log(`Componente ButtonDecrement foi renderizado`)
  })

  return (
    <button
      className={styles.button}
      onClick={() => decrement()}
    >
      -
    </button>
  );
}

export default ButtonDecrement;