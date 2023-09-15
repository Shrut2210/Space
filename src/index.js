import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Stars from './Stars';
import Nebula from './Nebula';
import Nakhshtra from './Nakhshtra';
import ZSigns from './ZSigns';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Layout /></>}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Stars" element={<Stars />}></Route>
          <Route path="/Nebula" element={<Nebula />}></Route>
          <Route path="/Nakhshtra" element={<Nakhshtra />}></Route>
          <Route path="/ZS" element={<ZSigns />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
