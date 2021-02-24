import React, { Fragment } from 'react'
import './App.css';
import Toggle from './ToggleRenderPropsChildren';
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <button onClick={toggle}>Login</button>
            <Modal on={on} toggle={ toggle }>
              <h1>Still in modal</h1>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

export default App;
