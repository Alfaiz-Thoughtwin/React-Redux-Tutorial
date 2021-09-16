// useReducer()
// import React, { useReducer } from 'react';
// import './App.css';

// const initialState = 0;

// const countReducer = (state, action) => {
//   // console.log(state, action);
//   if (action.type === 'DECREMENT') {
//     return state - 1;
//   }
//   if (action.type === 'INCREMENT') {
//     return state + 1;
//   }
//   return state;
// }

// const App = () => {

//   const [state, dispatch] = useReducer(countReducer, initialState)

//   const decHandler = (event) => {
//     event.preventDefault();
//     dispatch({
//       type: "DECREMENT"
//     });
//   }

//   const incHandler = (event) => {
//     event.preventDefault();
//     dispatch({
//       type: "INCREMENT"
//     });
//   }

//   return (
//     <>
//       <div className="container d-flex center__css">
//         <h1>Increment/Decrement Counter</h1>
//         <h4>Using React and Redux</h4>
//       </div>
//       <div className="container d-flex center__css_2">
//         <a className="btn anchor__css" title="Decrement" href="/" onClick={decHandler}><span>-</span></a>
//         <input type="text" className="form-control mx-4 text-center fs-4" value={state} onChange={(event) => event.target.value}/>
//         <a className="btn anchor__css" title="Increment" href="/" onClick={incHandler}><span>+</span></a>
//       </div>
//       <div className="container text-center mt-4">
//         <p>Decrement by 1 & Increment By 1</p>
//       </div>
//     </>
//   )
// }

// export default App;

import React from 'react';

const App = () => {
  return (
    <>
      <h1 className="text-center" >Welcome To React Redux</h1>
    </>
  )
}

export default App;
