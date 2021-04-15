import store from "./my-redux/store";

import { addBug, resolveBug } from "./my-redux/actions";

store.dispatch(addBug("Bug1 added"));
store.dispatch(resolveBug(1));

console.log("App Store", store.getState());





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
