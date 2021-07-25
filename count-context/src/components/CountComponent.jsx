import React, { useContext, useEffect } from 'react';
import CounterContext from '../context/CounterContext';
import styles from '../Counter.module.css';


function CountComponent() {
  const { value } = useContext(CounterContext)

  useEffect(() => {
    console.log(`Componente CounterComponent foi renderizado`)
  })

  return (
    <div>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default CountComponent;
