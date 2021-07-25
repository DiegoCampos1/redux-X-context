import React, { useContext, useEffect, useState } from 'react';
import CounterContext from '../context/CounterContext';
import styles from '../Counter.module.css';

function InputAmount() {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const { incrementByAmount } = useContext(CounterContext)

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
        onClick={() => incrementByAmount(incrementValue)}
      >
        Add Amount
      </button>
    </div>
  );
}

export default InputAmount;
