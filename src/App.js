import './App.css';
import Toggle from './ToggleRenderPropsChildren';

function App() {
  return (
    <div className="App">
      <h1>HI</h1>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            { on &&
              <h1>Show Me</h1>
            }
            <button onClick={toggle}>Show/Hide</button>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default App;
