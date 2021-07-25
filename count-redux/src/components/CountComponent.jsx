import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../Counter.module.css';
import { selectCount } from '../redux/counterSlice';

function CountComponent() {
  const count = useSelector(selectCount);

  useEffect(() => {
    console.log(`Componente CounterComponent foi renderizado`)
  })

  return (
    <div>
      <span className={styles.value}>{count}</span>
    </div>
  );
}

export default CountComponent;
