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
import Project from './page/project';
import ProjectDetail from "./page/projectDetail";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <HashRouter>
      <BackAnimation />
      <Nav />
      <Routes>
        <Route path="Home" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="Project" element={<Project />} />
        <Route path="ProjectDetail" element={<ProjectDetail />} />
        <Route path="Collection" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  </React.Fragment>
  
);
