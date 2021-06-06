import "./PhotoGallery.css";
import PhotoGalleryItem from "../PhotoGalleryItem/PhotoGalleryItem.jsx"

function PhotoGallery ({list, getPhotoGallery}) {
    console.log('props inside list', list);
    return(
        <div>
            <h3>My Favorite Hikes:</h3>
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