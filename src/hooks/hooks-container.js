import React, { useState } from 'react';

const HooksContainer = () => {
  const [stateValue, setValue] = useState(0);

  const incrementValue = () => {
    setValue(stateValue + 1);
  };

  const decrementValue = () => {
    setValue(stateValue - 1);
  };

  return (
    <div>
      React hooks
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decrementValue()}>Decrement</button>
      <b>Local state: {stateValue}</b>
    </div>
  );
};

export default HooksContainer;
