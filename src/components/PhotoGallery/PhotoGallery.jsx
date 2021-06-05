import PhotoGalleryItem from "../PhotoGalleryItem/PhotoGalleryItem.jsx"

function PhotoGallery ({list, getPhotoGallery}) {

    return(
        <div>
            <h3>Gallery goes here:</h3>
            {list.map(photo => {
                
                return (
                    <PhotoGalleryItem getPhotoGallery={getPhotoGallery} key={photo.id} photo={photo} />
                )
            })}
        </div>
    )
}

export default PhotoGallery;