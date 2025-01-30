import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TaskNest</h1>
        <p>TaskNest — Управляйте своими задачами легко и эффективно!</p>
      </header>
    </div>
  );
}

export default App;
