import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCound] = useState(0);
  const [toggleBtn, setToggleBtn] = useState(false);
  function inc() {
    setCound((prev) => prev + 1);
  }
  function dec() {
    setCound((prev) => prev - 1);
  }
  return (
    <>
      <div className="App">
        <h3>Count:{count}</h3>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
<button onClick={()=> setToggleBtn(!toggleBtn)}>Toggle btn</button>
        {toggleBtn ? <p className="lead">YouTube Content</p> : null}
      </div>
    </>
  );
}

export default App;
