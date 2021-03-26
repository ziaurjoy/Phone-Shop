import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Globalstate } from './state/provider';
import reducer, { initialstate } from './state/reducer';

ReactDOM.render(
  <React.StrictMode>,
    <Globalstate initialstate={initialstate} reducer={reducer}>
      <App />
    </Globalstate>,
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Globalstate } from './state/provider';
// import reducer, { initialstate } from './state/reducer';

// ReactDOM.render(
  // <Globalstate initialstate={initialstate} reducer={reducer}>
  //   <App />
  // </Globalstate>,
//   document.getElementById('root')
// );
