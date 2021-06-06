import './PhotoGalleryItem.css';
import {useState} from 'react';
import axios from 'axios';

function PhotoGalleryItem ({galleryItems, getPhotoGallery}) {
    
    const [isHidden, setIsHidden] = useState(false);

    const imageClick = () => {
        setIsHidden(!isHidden);
        console.log(isHidden);
    }
    
    const getMoreLikes = () => {
        console.log('liked!')
        const data = {
            likes: 1
        }
        axios.put(`gallery/like/${galleryItems.id}`, data)
        .then( response => {
            console.log(response);
            getPhotoGallery();
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="photo-description-container">
                { isHidden ? (
                <div onClick={() => setIsHidden(!isHidden)} className="image-description-box">
                <span>{galleryItems.description}</span>
            </div>
            ) : (
                <div className="image" onClick={() => setIsHidden(!isHidden)}>
                    <img src={galleryItems.path} />
                </div>
            )}

            <button onClick={() => getMoreLikes()}>Love!</button>
            <p>{galleryItems.likes} people love this!</p>
        </div>
    )
}

export default PhotoGalleryItem;