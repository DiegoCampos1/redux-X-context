import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../Counter.module.css';
import { incrementByAmount } from '../redux/counterSlice';

function InputAmount() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const dispatch = useDispatch();

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    console.log(`Componente InputAmount foi renderizado`);
  });

  return (
    <div>
      <input
        className={styles.textbox}
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button>
    </div>
  );
}

export default InputAmount;
