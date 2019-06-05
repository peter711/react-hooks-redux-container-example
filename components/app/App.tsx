import React, { Component } from 'react';

import ButtonWithStateHooks from '../buttonWithStateHooks';
import CounterContainer from "../../containers/CounterHooksContainer";


const App = () => (
  <div>
    <h1>React Typescript Hooks example</h1>
    <div>
      <div>Button with state hooks</div>
      <ButtonWithStateHooks
        afterTextChanged={() => console.log("useEffect - afterTextChanged")}
        afterCountChanged={() => console.log("useEffect - afterCountChanged")} />
    </div>
    <div style={{ marginTop: "15px" }}>
      <CounterContainer />
    </div>
  </div>);

export default App;