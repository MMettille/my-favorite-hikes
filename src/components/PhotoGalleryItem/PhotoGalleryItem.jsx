import './PhotoGalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function PhotoGalleryItem ({galleryItems, getPhotoGallery}) {

    return (
        <>
            {/* // ⬇ Loops through and renders each photo */}
            <div className="photo">
                <img src={galleryItems.path} width="200px" height="200px" />
            </div>
        </>
    )
}

export default PhotoGalleryItem;