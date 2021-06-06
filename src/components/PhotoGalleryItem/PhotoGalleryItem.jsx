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
        <div className="top-box">
                { isHidden ? (
                <div onClick={() => setIsHidden(!isHidden)} className="photo-description-box">
                <span>{galleryItems.description}</span>
            </div>
            ) : (
                <div className="photo" onClick={() => setIsHidden(!isHidden)}>
                    <img src={galleryItems.path} width="200px" height="200px"/>
                </div>
            )}

            <button onClick={() => getMoreLikes()}>Love!</button>
            <p>{galleryItems.likes} people love this!</p>
        </div>
    )
}

export default PhotoGalleryItem;