import React, { useEffect } from 'react';
import styles from '../Counter.module.css';
import { useDispatch } from 'react-redux';
import { decrement } from '../redux/counterSlice';

function ButtonDecrement() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`Componente ButtonDecrement foi renderizado`)
  })

  return (
    <button
      className={styles.button}
      onClick={() => dispatch(decrement())}
    >
      -
    </button>
  );
}

export default ButtonDecrement;