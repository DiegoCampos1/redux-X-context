import React, { useContext, useEffect } from 'react';
import styles from '../Counter.module.css';
import CounterContext from '../context/CounterContext';

function ButtonIncrement() {
  const { increment } = useContext(CounterContext)

  useEffect(() => {
    console.log(`Componente ButtonIncrement foi renderizado`)
  })

  return (
    <button
      className={styles.button}
      onClick={() => increment()}
    >
      +
    </button>
  );
}

export default ButtonIncrement;
