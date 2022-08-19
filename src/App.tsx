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
    let image = event.target;
    const file = image.files[0];
    console.log(file.name)
    let splitFile:Array<string> = file.name.split('.')
    console.log(splitFile[1])

    if(splitFile[1] === 'JPG' || splitFile[1] === 'jpg'){
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = function () {
        setPicture(reader?.result?.toString());
    };
  } else {
    alert("Please provide a jpg file extension!")
  } 
}

  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="link-nav-bar">Main</Link>
        <Link to="/Add" className="link-nav-bar">Add</Link>
      </div>
      <PictureContext.Provider value={{setTitle, setDescription,setID,createImage, setPicture,LoadedPicture, setLoadedPicture,setNewItem,PicturesArray,title,description,pict}}>
        <Routes>
          <Route path="/" element={<Galery />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Single/:id" element={<Single />} />
        </Routes>
      </PictureContext.Provider>
      <div className="signature">Created by Ramon</div>
    </>
  );
}

export default App;

