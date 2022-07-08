import React from 'react';

import s from "./Gallery.Module.css"
import GalleryContent from "./GalleryContent";

const Gallery = () => {

    return (

        <div>
            <div className={s.container}>
                <h1> <span>Church Gallery</span></h1>
            </div>
            <GalleryContent/>

        </div>
    );
};

export default Gallery;