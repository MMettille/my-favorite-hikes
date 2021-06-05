import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/Image-Five.jpeg" width="200px" height="200px"/>
      </div>
    );
}

export default App;
