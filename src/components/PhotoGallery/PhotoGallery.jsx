import "./PhotoGallery.css";
import PhotoGalleryItem from "../PhotoGalleryItem/PhotoGalleryItem.jsx"

function PhotoGallery ({list, getPhotoGallery}) {
    console.log('props inside list', list);
    return(
        <div>
            <h3>My Favorite Hikes:</h3><br />
            <p>I am an outdoorsy person and camp, backpack, and/or climb whenever I get the chance. Click the images below to learn where I've been and don't forget to vote for your favorite!</p>
                <div className="photo-gallery">
                    {list.map(galleryItems => 
                        // ⬇ Each photo gets send into the PhotoGalleryItem
                        <PhotoGalleryItem getPhotoGallery={getPhotoGallery} key={galleryItems.id} id={galleryItems.id} path={galleryItems.path} description={galleryItems.description} galleryItems={galleryItems} />
                        )
                    }
                </div>
        </div>
    )
}

export default PhotoGallery;