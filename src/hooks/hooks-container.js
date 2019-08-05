import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';

const HooksContainer = () => {
  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState();
  const [state, dispatch] = useReducer(
    Reducer.HooksReducer,
    Reducer.initialState
  );

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

  const handleDispatchTrue = () => {
    dispatch(ACTIONS.success());
  };

  const handleDispatchFalse = () => {
    dispatch(ACTIONS.failure());
  };

  return (
    <div>
      React hooks
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decrementValue()}>Decrement</button>
      <button onClick={() => changeUseEffectValue()}>Change use effect</button>
      <br />
      <b>Local state: {stateValue}</b>
      <br />
      <p>Teste: {useEffectValue ? <b>{useEffectValue}</b> : <b>No value</b>}</p>
      <br />
      <button onClick={() => handleDispatchTrue()}>Dispatch true</button>
      <button onClick={() => handleDispatchFalse()}>Dispatch false</button>
      <br />
      <p>reduce value: {state.stateprop1 ? <b>true</b> : <b>false</b>}</p>
    </div>
  );
};

export default HooksContainer;
