import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import BackAnimation from './compontents/backAnimation';
import Nav from './compontents/nav';
import About from "./page/about";
import Page2 from "./page/page2";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <HashRouter>
      <BackAnimation />
      <Nav />
      <Routes>
        <Route path="Home" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="Portfolio" element={<Page2 />} />
        <Route path="Collection" element={<Page2 />} />
      </Routes>
    </HashRouter>
  </React.Fragment>
  
);
