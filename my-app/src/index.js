import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


// import App from './App';

// import Header from "./Component/Header/Header"

// import Footer from "./Component/Footer/Footer"

import P1 from "./page/P1"
import P2 from "./page/P2"
var x = {'name':'zzz',gender:'男'}
ReactDOM.render(<div>
  <P1 data={x}/>
  </div>, document.getElementById('root'));
