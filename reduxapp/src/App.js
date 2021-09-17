import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  const decHandler = (event) => {
    event.preventDefault();
    dispatch(decNumber());
  }

  const incHandler = (event) => {
    event.preventDefault();
    dispatch(incNumber(5));
  }

  return (
    <>
      <div className="container d-flex center__css">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
      </div>
      <div className="container d-flex center__css_2">
        <a className="btn anchor__css" onClick={decHandler} title="Decrement" href="/"><span>-</span></a>
        <input type="text" name="quantity" className="form-control mx-4 text-center fs-4" value={myState} onChange={(event) => event.target.value}/>
        <a className="btn anchor__css" onClick={incHandler}title="Increment" href="/"><span>+</span></a>
      </div>
      <div className="container text-center mt-4">
        <p>Decrement by 1 & Increment By 5</p>
      </div>
    </>
  )
}

export default App;
