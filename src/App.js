import React, { Suspense, lazy } from "react";
import "./App.css";
import Main from "./ts/main.tsx";
function App() {
  return (
    <div>
      from App
      <Main />
    </div>
  );
}

export default App;
