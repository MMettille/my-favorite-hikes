// import React from 'react';
import {useState, useEffect} from 'react';
// import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';

function App() {
  
    const [photoGallery, setPhotoGallery] = useState([]);

    // ⬇ When the page is loaded, call getPhotos function
    useEffect(() => {
      getPhotos()
    }, []);

    const getPhotos = () => {
      console.log('in getPhotos')
    
    }

    // ⬇ Rendering what we see on the DOM
    return (
      <div className="App">
        <Header />
        <p>Gallery goes here</p>
        <img src="images/Image-Five.jpeg" width="200px" height="200px"/>
      </div>
    );
}

export default App;
