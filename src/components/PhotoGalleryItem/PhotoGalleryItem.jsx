import './PhotoGalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function PhotoGalleryItem ({galleryItems, getPhotoGallery}) {
    
    const [isHidden, setIsHidden] = useState(false);

    const imageClick = () => {
        setIsHidden(!isHidden);
        console.log(isHidden);
    }
    console.log(isHidden)
    return (
        <>
            {/* // ⬇ This will show the photo always, and the description to the left of it. */}
            {/* { isHidden ? (
                <> </>
            ) : (
                <div>
                    <p>{galleryItems.description}</p>
                </div>
            )}
            // ⬇ Loops through and renders each photo
            <div className="photo">
                <img src={galleryItems.path} width="200px" height="200px"  onClick={() => setIsHidden(!isHidden)} />
                
            </div> */}

            {/* // ⬇ Only the description shows up
            { isHidden ? (
                <div className="photo">
                    <img src={galleryItems.path} width="200px" height="200px"  onClick={() => setIsHidden(!isHidden)} />
                </div>
            ) : (
                <div>
                    <p>{galleryItems.description}</p>
                </div>
            )} */}

            // ⬇ The image shows first, but then you cannot toggle it back.
            { isHidden ? (
                <div>
                <p>{galleryItems.description}</p>
            </div>
            ) : (
                <div className="photo">
                    <img src={galleryItems.path} width="200px" height="200px"  onClick={() => setIsHidden(!isHidden)} />
                </div>
            )}
            
            {/* <button onClick={() => setIsHidden(!isHidden)}>
                    {!isHidden ? 'Hide' : 'Show'}
                </button> */}
        </>
    )
}

export default PhotoGalleryItem;