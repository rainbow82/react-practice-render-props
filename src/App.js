import React, { Fragment } from 'react'
import './App.css';
import Toggle from './ToggleRenderPropsChildren';

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
    </div>
  );
}

export default App;
