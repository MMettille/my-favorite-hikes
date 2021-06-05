import PhotoGalleryItem from "../PhotoGalleryItem/PhotoGalleryItem.jsx"

function PhotoGallery ({list}) {
    console.log('props inside list', list);
    return(
        <div>
            <h3>Gallery goes here:</h3>
            {list.map(galleryItems => 
                    <PhotoGalleryItem key={galleryItems.id} id={galleryItems.id} path={galleryItems.path} description={galleryItems.description}/>
                )
            }
        </div>
    )
}

export default PhotoGallery;