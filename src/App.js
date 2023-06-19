import React, { Suspense, lazy } from "react";
import "./App.css";
// import StaticData from "./dynamicModule";
const LazyLoadedComponent = lazy(() => import("./LazyLoadedComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">Vanity Numbers1</header>

      <Suspense fallback={<div>loading</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
}

export default App;
