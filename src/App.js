<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import "./App.css";
// import StaticData from "./dynamicModule";
const LazyLoadedComponent = lazy(() => import("./LazyLoadedComponent"));
=======
import logo from "./logo.svg";
import "./App.css";
>>>>>>> f12b1518f53371e17b6f58667069b09ae4c162c2

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">Vanity Numbers1</header>

      <Suspense fallback={<div>loading</div>}>
        <LazyLoadedComponent />
      </Suspense>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
>>>>>>> f12b1518f53371e17b6f58667069b09ae4c162c2
    </div>
  );
}

export default App;
