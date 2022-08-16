import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Add } from './components/Add/index'
import { Single } from './components/Single/index'
import { Galery } from './components/Galery/index'

function App() {

  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="link-nav-bar">Main</Link>
        <Link to="/Add" className="link-nav-bar">Add</Link>
        <Link to="/Single" className="link-nav-bar">Single</Link>
      </div>
      <Routes>
        <Route path="/" element={<Galery />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Single" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;

/* 

TO DO:

- Check about installing the uuid library, if it will be necessary or not (not installed yet)
- Firebase version (not installed yet)

3 MAIN APP PAGES:
- Home page which displays the pictures
- Add page, to create a new picture structure with comments, title
- Single page, the one which shows the picture in larger size with its comment details




Books - 2:29: 
https://www.youtube.com/watch?v=oT-feDPuJmk&list=PLvRPaExkZHFlFewlz71TJRheerCt4xc9K&index=6&ab_channel=VidaMRR-Dise%C3%B1oydesarrolloweb



Boni - 8:10
https://www.youtube.com/watch?v=ss4BXa-WfgI&ab_channel=BoniekyLacerda




 */
