import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import PhotoGallery from '../PhotoGallery/PhotoGallery.jsx'


function App() {
  
    const [photoGallery, setPhotoGallery] = useState([]);

    // ⬇ When the page is loaded, call getPhotos function
    useEffect(() => {
      getPhotoGallery()
    }, []);

    const getPhotoGallery = () => {
        console.log('in getPhotos');
        // ⬇ Get request to the server
        axios.get('/gallery').then( response => {
        // ⬇ Checking to see that we have access to the photos, then saving the data in the photoGallery state
        console.log(response.data)
        setPhotoGallery(response.data)
        }).catch( err => {
          console.log('error in getPhotos', error)
      })
    }

    // ⬇ Rendering what we see on the DOM
    return (
      <div className="App">
        <Header />
        <PhotoGallery list={photoGallery}/>
        <img src="images/Image-Five.jpeg" width="200px" height="200px"/>
      </div>
    );
}

export default App;
