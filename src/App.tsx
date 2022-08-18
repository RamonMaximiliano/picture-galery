import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Add } from './components/Add/index'
import { Single } from './components/Single/index'
import { Galery } from './components/Galery/index'
import { PictureContext } from './Context/Context'

type LoadedPicture = {
  title?: string,
  description?: string,
  picture?: string,
  ID?: string,
}

function App() {
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [pict, setPicture] = useState<string>()
  const [ID, setID] = useState<string>()
  const [LoadedPicture, setLoadedPicture] = useState<LoadedPicture>({
    title: 'Waiting...',
    description: 'Waiting',
    picture: 'Waiting',
    ID: 'Waiting',
})
  const [PicturesArray, setPicturesArray] = useState<LoadedPicture[]>([]) 

//UPDATE FINAL ARRAY  
useEffect(()=>{
   if(LoadedPicture.title == undefined || LoadedPicture.title == 'Waiting...' ){
    setPicturesArray([])
  } else { 
      setPicturesArray([...PicturesArray, LoadedPicture]) 
  }
}, [LoadedPicture])
 

//SET NEW ID FOR NEW ITEM
useEffect(()=> {
  setID(crypto.randomUUID())
},[LoadedPicture])


//SET NEW ITEM
function setNewItem() {
  if (title !== '' && title !== undefined && description !== '' && description !== undefined && pict !== '' && pict !== undefined) {
      setLoadedPicture({
          title: title,
          description: description,
          picture: pict,
          ID: ID,
      })
      setPicture('')
      setTitle('')
      setDescription('')
  } else {
      window.alert("Please provide all the information!")
  }
}

//CREATE IMAGE STRING
  function createImage(event: any) {
    const image = event.target;
    const file = image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        setPicture(reader?.result?.toString());
    };
}

  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="link-nav-bar">Main</Link>
        <Link to="/Add" className="link-nav-bar">Add</Link>
        <Link to="/Single" className="link-nav-bar">Single</Link>
      </div>
      <PictureContext.Provider value={{setTitle, setDescription,setID,createImage, setPicture,LoadedPicture, setLoadedPicture,setNewItem,PicturesArray}}>
        <Routes>
          <Route path="/" element={<Galery />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Single" element={<Single />} />
        </Routes>
      </PictureContext.Provider>
      <div className="signature">Created by Ramon</div>
    </>
  );
}

export default App;

/* 

TO DO:


change ID for key prop on new item

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
