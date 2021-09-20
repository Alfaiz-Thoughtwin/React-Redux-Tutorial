import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, devNumber, mulNumber } from './actions/index';

const App = () => {

  const myState = useSelector((state) => state.changeNumber);
  const myOtherState = useSelector((state) => state.mulDivNumber);
  const dispatch = useDispatch();

  const decHandler = (event) => {
    event.preventDefault();
    dispatch(decNumber());
  }

  const incHandler = (event) => {
    event.preventDefault();
    dispatch(incNumber(5));
  }

  const devHandler = (event) => {
    event.preventDefault();
    dispatch(devNumber());
  }

  const mulHandler = (event) => {
    event.preventDefault();
    dispatch(mulNumber(5))
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="container mt-5">
              <h1>Increment/Decrement Counter</h1>
              <h4>Using React and Redux</h4>
            </div>
            <div className="container d-flex justify-content-center mt-5">
              <a className="btn anchor__css" onClick={decHandler} title="Decrement" href="/"><span>-</span></a>
              <input type="text" name="quantity" className="form-control mx-4 text-center fs-4" value={myState} onChange={(event) => event.target.value}/>
              <a className="btn anchor__css" onClick={incHandler}title="Increment" href="/"><span>+</span></a>
            </div>
            <div className="container text-center mt-4">
              <p>Decrement by 1 & Increment By 5</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container mt-5">
              <h1>Division/Multiplication</h1>
              <h4>Using React and Redux</h4>
            </div>
            <div className="container d-flex justify-content-center margin_css">
              <a className="btn anchor__css" onClick={devHandler} title="Decrement" href="/"><span>/</span></a>
              <input type="text" name="quantity" className="form-control mx-4 text-center fs-4" value={myOtherState} onChange={(event) => event.target.value}/>
              <a className="btn anchor__css" onClick={mulHandler}title="Increment" href="/"><span>*</span></a>
            </div>
            <div className="container text-center mt-4">
              <p>Division by 5 & Multiplication by 5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
