import React, { useState, useEffect } from 'react';

const HooksContainer = () => {
  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState();

  useEffect(() => {
    console.log('useEffect: ');
    setTimeout(() => setUseEffectValue('useEffectWorked'), 3000);
  }, [stateValue]);

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue - 1);
  };

  const changeUseEffectValue = () => {
    setUseEffectValue('some value');
  };

  return (
    <div>
      React hooks
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decrementValue()}>Decrement</button>
      <button onClick={() => changeUseEffectValue()}>Decrement</button>
      <b>Local state: {stateValue}</b>
      <p>Teste: {useEffectValue ? <b>{useEffectValue}</b> : <b>No value</b>}</p>
    </div>
  );
};

export default HooksContainer;
