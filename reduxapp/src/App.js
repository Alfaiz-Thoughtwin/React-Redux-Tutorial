import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const decHandler = (event, data) => {
    event.preventDefault();
    setCount(count - 1);
  }

  const incHandler = (event, data) => {
    event.preventDefault();
    setCount(count + 5);
  }

  return (
    <>
      <div className="container d-flex center__css">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
      </div>
      <div className="container d-flex center__css_2">
        <a className="btn anchor__css" title="Decrement" href="/" onClick={decHandler}><span>-</span></a>
        <input type="text" className="form-control mx-4 text-center fs-4" value={count} onChange={(event) => event.target.value}/>
        <a className="btn anchor__css" title="Increment" href="/" onClick={incHandler}><span>+</span></a>
      </div>
      <div className="container text-center mt-4">
        <p>Decrement by 1 & Increment By 5</p>
      </div>
    </>
  )
}

export default App;
