import React, { useEffect } from 'react';
import styles from '../Counter.module.css';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';

function ButtonIncrement() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`Componente ButtonIncrement foi renderizado`)
  })

  return (
    <button
      className={styles.button}
      onClick={() => dispatch(increment())}
    >
      +
    </button>
  );
}

export default ButtonIncrement;
