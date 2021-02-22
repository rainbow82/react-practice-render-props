import React, { Fragment } from 'react'
import './App.css';
import Toggle from './ToggleRenderPropsChildren';
import Portal from './Portal';

function App() {
  return (
    <div className="App">
      <h1>HI</h1>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            { on &&
              <h1>Show Me</h1>
            }
            <button onClick={toggle}>Show/Hide</button>
          </Fragment>
        )}
      </Toggle>
      <Portal><h1> inside the portal </h1></Portal>
    </div>
  );
}

export default App;
