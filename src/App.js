import React, { useState } from 'react';
import Routes from './routes';
import Context from './utils/context';

const App = () => {
  const [stateGlobal, setStateGlobal] = useState(0);

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1);
  };

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1);
  };

  return (
    <Context.Provider
      value={{
        valueGlobalState: stateGlobal,
        addGlobalValue: () => incrementGlobalState(),
        decGlobalValue: () => decrementGlobalState(),
      }}
    >
      <div>
        React
        <Routes />
      </div>
    </Context.Provider>
  );
};

export default App;
