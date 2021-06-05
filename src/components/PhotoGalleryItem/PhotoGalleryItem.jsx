import './PhotoGalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function PhotoGalleryItem ({galleryItems, getPhotoGallery}) {
    
    const [isHidden, setIsHidden] = useState(false);

    const imageClick = () => {
        setIsHidden(!isHidden);
        console.log(isHidden);
    }
    return (
        <>
            { isHidden ? (
                
            )}
            {/* // ⬇ Loops through and renders each photo */}
            <div className="photo">
                <img src={galleryItems.path} width="200px" height="200px"  onClick={() => setIsHidden(!isHidden)} />
                {/* <button onClick={() => setIsHidden(!isHidden)}>
                    {!isHidden ? 'Hide' : 'Show'}
                </button> */}
            </div>
        </>
    )
}

export default PhotoGalleryItem;