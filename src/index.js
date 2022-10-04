import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BackAnimation from './compontents/backAnimation';
import Page1 from "./page/page1";
import Page2 from "./page/page2";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BackAnimation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="1" element={<Page1 />} />
        <Route path="2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
  
);
